/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var corsMiddleware = require('restify-cors-middleware')
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

// connect to mongo
var db;

if (process.env.MONGO_URL) {
    MongoClient.connect(process.env.MONGO_URL, (err, database) => {
        if(err) throw err;
        console.log("Connected correctly to server");
        
        db = database;
    })
}

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional 
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
  })

server.pre(cors.preflight)
server.use(cors.actual)
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata 
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

// Create your bot with a function to receive messages from the user


// The UniversalBot class forms the brains of your bot. It's responsible for managing all the conversations your bot has with a user
// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')

// The default dialog (2nd arg) runs whenever the dialog stack is empty and no other dialog is triggered via LUIS or another recognizer
var bot = new builder.UniversalBot(connector, (s, args) => {
    console.log (`root dialog: ${JSON.stringify(s.message, null, 1)}  \n arges : ${JSON.stringify(args, null, 1)}`)
    s.beginDialog('new_user')
})


// the bot will now pass all utterences to LUIS, and the results will come back
// The 'matches' option on the 'triggerAction' attached to the dialog specifies the name of the intent (unless its a regex "matches: /^hello$/i"). 
let recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL)
    intent_dialog = bot.recognizer(recognizer)

/*
intent_dialog.onDefault((session) => {
    session.send('Sorry, I did not understand \'%s\'.', session.message.text);
})

.matches('<yourIntent>')... See details at http://docs.botframework.com/builder/node/guides/understanding-natural-language/
*/

/*
bot.use({
    botbuilder:  (session, next) => {
        var text = session.message.text;
        console.log (`debug middleware : got ${JSON.stringify(session.message)}`)
        next();
    }
});
*/


// A bot receives a conversationUpdate activity whenever it has been added to a conversation
bot.on('conversationUpdate', function (message) {
    console.log (`got conversationUpdate ${JSON.stringify(message)}`)
    if (message.membersAdded && message.source == "webchat") {
        message.membersAdded.forEach(function (identity) {
            if (identity.id == message.address.bot.id) {
            //    bot.beginDialog (message.address, 'new_user') //'check_router_select' ) // 'new_user')
            }
        });
    }
});


bot.dialog('sign_in', (s) => {
    s.endDialog (new builder.Message(s).addAttachment (new builder.SigninCard(s)
    .text('BotFramework Sign-in Card')
    .button('Sign-in', 'https://login.microsoftonline.com')))
})

// When a dialog is invoked, it takes control of the conversation flow. 
// Every new message will be subject to processing by that dialog until it either closes or redirects to another dialog.
bot.dialog('new_user', [
    (s, args) => {
        console.log (`new_user s: ${JSON.stringify(s.message, null, 1)}  \n arges : ${JSON.stringify(args, null, 1)}`)
        s.send(`Welcome ${s.message.user.name}, Im **T-BOT**, I'm just retriving your data...`)
        setTimeout (() => {
            s.send({
                    text: `Our data indicates a potential issue with your network`,
                    attachments: [
                        {
                            contentType: "image/jpg",
                            contentUrl: "https://addons.cdn.mozilla.net/static/img/developers/test-warning.png?b=3e379b45-59e64199",
                            name: "warning"
                        }
                    ]
                })
            setTimeout (() => builder.Prompts.confirm (s, "Is now a good time to check it out?"), 4000)
        }, 6000)
    },  (s, args) => {
        if (args.response) {
            s.send (`Great! Thanks`)
            setTimeout (() => {
                s.beginDialog('check_router_select')
            }, 2000)
        } else {
            s.endConversation (`OK, drop back anytime and we can pick this up again`)
        }

    }
])

bot.dialog('check_router_select',  (s) => {
        let msg =  new builder.Message(s);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.text ('Could you confirm your router type please?')
        msg.attachments([
            new builder.HeroCard(s)
                .title("Super Router (2015)")
                .subtitle("100% Soft and Luxurious Cotton")
                .text("Price is $25 and carried in sizes (S, M, L, and XL)")
                .images([builder.CardImage.create(s, 'https://cdn1.techadvisor.co.uk/cmsdata/reviews/3625746/TalkTalk_thumb800.jpg')])
                .buttons([
                    builder.CardAction.dialogAction(s, "router_scrape", "Super Router (2015)", "This is mine")
                ]),
            new builder.HeroCard(s)
                .title("Plus Fibre router")
                .subtitle("100% Soft and Luxurious Cotton")
                .text("Price is $25 and carried in sizes (S, M, L, and XL)")
                .images([builder.CardImage.create(s, 'https://ichef.bbci.co.uk/news/660/cpsprodpb/2C41/production/_92792311_mediaitem92792307.jpg')])
                .buttons([
                    builder.CardAction.dialogAction(s, "router_scrape", "Plus Fibre router", "This is mine")
                ])
        ])
        s.send(msg).endDialog();
})
bot.beginDialogAction('router_scrape', 'router_scrape');

var savedAddress;
bot.dialog('router_scrape', [
        (s, args) => {
            savedAddress = s.message.address
            if (args) {
            s.send (`Thanks, you have a **${args.data}**, we have updated our records`)
            }
            setTimeout (() => builder.Prompts.confirm (s, `right, I'd like get the lastest status of your router, is that OK?`), 2000)
        },
        (s, args) => {
        console.log (`router_scrape s: ${JSON.stringify(s.message, null, 1)}  \n args : ${JSON.stringify(args, null, 1)}`)
        let thCard =  new builder.ThumbnailCard(s)
            .title('CLick here to send Router Data to T-BOT')
            .subtitle('This will let T-BOT get the latest router info')
            .text('bla')
            .images([
                builder.CardImage.create(s, 'http://m1.ttxm.co.uk/sites/rightnow/broadband/Router_Setup/Newer_GUI_summary_page.png')
            ])
            .buttons([
                builder.CardAction.openUrl(s, 'http://localhost:3000/diag', 'Get Router Status')
            ])
        s.send ( new builder.Message(s)
            .addAttachment(thCard))
        },
        (s, arg) => {
            s.endDialog('Waiting for router data')
        }
]).triggerAction ({
    matches: /^router_scrape=.*/i
})

// curl -H "Content-Type: application/json" -X POST -d '{"router":"xyz","firmware":"xyz"}'  localhost:3978/api/gotRouterData
server.use(restify.plugins.bodyParser());
server.post('/api/gotRouterData', (req, res, next) => {
    console.log (`/api/gotRouterData ${JSON.stringify(req.body)}`)
    bot.beginDialog (savedAddress, 'got_router_data', req.body)
    res.send({"success": 1});
})

server.get('/api/initSMS', (req, res, next) => {
    console.log (`/api/initSMS`)
    bot.beginDialog({
        "id": "num",
        "channelId": "sms",
        "user": {
            "id": "num",
            "name": "num"
        },
        "conversation": {
            "isGroup": false,
            "id": "num"
        },
        "bot": {
            "id": "num",
            "name": "ttbot5demo"
        },
        "serviceUrl": "https://sms.botframework.com"
    }, "sms_outbound")
    res.send({"success":"1"});
})

bot.dialog('sms_outbound', [
    (s, args) => {
        s.send ('Hello Keith, this is T-BOT')
        setTimeout (() => {
            builder.Prompts.confirm (s, 'Our data indicates a potential issue with your network, do you have time to check it out now?')
        }, 10000)
    }, 
    (s, args) => {
        if (args.response) {
            s.endConversation ("This is not the demo flow you're looking for")
        } else {
            s.endConversation ("Ok, Check back with me anytime when you have time")
        }
    }
])

bot.dialog('got_router_data', [
    (s, args) => {
        
        var collection = db.collection('myaccount');
        collection.update(
                { type: "subscriber" },
                { $set: { "install.firmware-version":  args.firmware }}
            ).then((succ) => {
                console.log (`ok : ${succ}`)
            }, (err) => {
                console.log (err)
            })

        setTimeout (() => {    
            console.log (`got_router_data dialog: ${JSON.stringify(s.message, null, 1)}  \n\nargs : ${JSON.stringify(args)}`)
            s.send (`Got it! Thanks...`)
            setTimeout (() => {
                s.send (`Looks like Your Firmware version is **${args.firmware}**`)
                s.send (`our **knowledgebase** shows this can cause your issue!`)
            
                setTimeout (() => {
                    s.send(`I'll create a case for you to track this issue`)
                    
                    var collection = db.collection('myaccount');
                    collection.insertOne({type : "case", name: "Conection Issue - Firmware Upgrade", date: new Date().toString().substr(0,15), status: "NEW"}, function(err, result) {
                        setTimeout (() => {
                            builder.Prompts.confirm (s, `OK, we need to upgrade you! I'd like to initiate an upgrade of your router firmware, it will take around **~1min**, Ok to proceed?`)
                        }, 2000)
                    });
                }, 3000)
            }, 3000)
        }, 3000)
    },
    (s,args) => {
        s.send (`Great, Starting **upgrade** now...  I'll keep an eye on your network in the next couple of days and I'll **personally** let you know if it resolves the issue`)
        setTimeout (() => {
            s.send (`**That was quick!**, thanks for your patience,  would you mind completing a **BOT-Survey**.`)
            setTimeout (() => {
                builder.Prompts.confirm (s, `you can be honest, I have no feelings `)
            }, 2000)
        }, 10000)
    },
    (s,args) => {
        s.endConversation('OK, catch you later!')
    }
])

bot.dialog('help', (s, args) => {
    console.log (`hello dialog: ${JSON.stringify(s.message, null, 1)}  \n arges : ${JSON.stringify(args)}`)
    s.userData.firstRun = true;
    var welcomeCard = new builder.HeroCard(s)
        .title('Welcome')
        .subtitle('If at any time you wish you can get these services')
        .images([
            new builder.CardImage(s)
                .url('https://www.vouchercodes.co.uk/static/v10/images/merchant/logo/128px/1750_170201143905.png')
                .alt('connectivity')
        ])
        .buttons([
            builder.CardAction.imBack(s, 'package_details', 'My Package'),
            builder.CardAction.imBack(s, 'I_have_issue', 'I have a issue')
        ]);

    s.send(new builder.Message(s)
        .addAttachment(welcomeCard));

}).triggerAction ({
    matches: 'NeedHelp'
})


/*
bot.dialog('package_details', [
    (session) => {
        // A prompt is used whenever a bot needs input from the user.
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    (session, results) => {
        // A dialog that is created using a waterfall must be explicitly ended
        session.dialogData.name = results.response;
        builder.Prompts.confirm (session, `Hello ${results.response}, do you want your balance today?`);
    },
    (session, results, next) => {
        // A dialog that is created using a waterfall must be explicitly ended
        if (results.response) {
            session.send ("Getting balance, please wait")
            setTimeout (() => {
                builder.Prompts.text(session, `Your Balance is 123.23`);
            },1500)

        } else {
            next()
        }
    },
    (session, results) => {
        session.endDialog (`goodbye ${session.dialogData.name}`)
        //session.beginDialog('welcome')
    }
])
*/
// The matches option can take a regular expression /^help$/i or the name of a recognizer. 
// To bind the action to a button click, use CardAction.dialogAction() to trigger the action.



