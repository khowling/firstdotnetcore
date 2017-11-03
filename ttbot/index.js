const   restify = require('restify'),
        builder = require('botbuilder'),
        corsMiddleware = require('restify-cors-middleware')

// Setup Restify Server
var server = restify.createServer();

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional 
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
  })

server.pre(cors.preflight)
server.use(cors.actual)


server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});


// The ChatConnector is a http middleware that connects your bot to the Bot Framework Connector Service
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata 
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());



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

/*
// A bot receives a conversationUpdate activity whenever it has been added to a conversation
bot.on('conversationUpdate', function (message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function (identity) {
            if (identity.id !== message.address.bot.id) {
                bot.beginDialog (message.address, 'new_user') //'check_router_select' ) // 'new_user')
            }
        });
    }
});
*/

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
        s.send(`Welcome ${s.userData.name}, Im **TT-BOT**, I'm just retriving your data...`)
        setTimeout (() => {
            s.send({
                    text: `**Thats odd**. Looking at your recent data, your router is disconnecting more than normal`,
                    attachments: [
                        {
                            contentType: "image/jpg",
                            contentUrl: "https://addons.cdn.mozilla.net/static/img/developers/test-warning.png?b=3e379b45-59e64199",
                            name: "warning"
                        }
                    ]
                })
            setTimeout (() => builder.Prompts.confirm (s, "Are you experinacing any connectivity problems?"), 4000)
        }, 6000)
    }, 
    (s,args) => {
        s.send(`${args.response ? 'Oh sorry to hear that, ' : 'No! hmmm, '} checking other data....`)
        setTimeout (() => {
            s.send(`There are no immidiate issue on your exchange & I see you dont have any support cases open...`)
            
            setTimeout (() => builder.Prompts.confirm (s, { text: `Do you have time to check a few things out with me?`}), 3000)
        }, 3000)
    },  (s, args) => {
        if (args.response) {
            s.beginDialog('check_router_select')
        } else {
            s.endDialog (`OK, drop back anything and we can pick this up again`)
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
                .title("TalkTalk Plus Fibre router")
                .subtitle("100% Soft and Luxurious Cotton")
                .text("Price is $25 and carried in sizes (S, M, L, and XL)")
                .images([builder.CardImage.create(s, 'https://ichef.bbci.co.uk/news/660/cpsprodpb/2C41/production/_92792311_mediaitem92792307.jpg')])
                .buttons([
                    builder.CardAction.dialogAction(s, "router_scrape", "TalkTalk Plus Fibre router", "This is mine")
                ])
        ])
        s.send(msg).endDialog();
})
bot.beginDialogAction('router_scrape', 'router_scrape');

var savedAddress;
bot.dialog('router_scrape', [
        (s, args) => {
            savedAddress = s.message.address
            s.send (`Thanks, you have a **${args.data}**, we have updated our records`)
            setTimeout (() => builder.Prompts.confirm (s, `right, now lets get the status of your router, all good?`), 2000)
        },
        (s, args) => {
        console.log (`router_scrape s: ${JSON.stringify(s.message, null, 1)}  \n args : ${JSON.stringify(args, null, 1)}`)
        let thCard =  new builder.ThumbnailCard(s)
            .title('Send Router Data to T-BOT')
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

bot.dialog('got_router_data', (s, args) => {
    console.log (`got_router_data dialog: ${JSON.stringify(s.message, null, 1)}  \n\nargs : ${JSON.stringify(args)}`)
    s.send (`Great, your Firmware version is ${args.firmware}, we need to upgrade you!`)
})

bot.dialog('help', (s, args) => {
    console.log (`hello dialog: ${JSON.stringify(s.message, null, 1)}  \n arges : ${JSON.stringify(args)}`)
    s.userData.firstRun = true;
    var welcomeCard = new builder.HeroCard(s)
        .title('Welcome to TalkTalk')
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


