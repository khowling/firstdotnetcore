import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {Persona, Alert, Histogram} from './common.js'
import { Chat } from 'botframework-webchat'
import 'botframework-webchat/botchat.css'


const AttitionalInfo = ({user}) => 
            <div className="m-additional-information " style={{"boarderLeft": "0px solid rgba(0,0,0,.2)"}}>
                <div data-grid="col-12 stack-2">
                        <div data-grid="col-6">
                            <ul className="c-list f-bare f-lean">
                                <li>
                                    <strong>Router Model</strong>
                                </li>
                                <li>{user.install && user.install["router-model"]}</li>
                            </ul>
                            <ul className="c-list f-bare f-lean">
                                <li>
                                    <strong>Router Install Date</strong>
                                </li>
                                <li>{user.install && user.install["install-date"]}</li>
                            </ul>
                            <ul className="c-list f-bare f-lean">
                                <li>
                                    <strong>Firmware Version</strong>
                                </li>
                                <li><div className="pulseme">{user.install && user.install["firmware-version"]}</div></li>
                            </ul>
                        </div>
                        <div data-grid="col-6">
                            <div className="c-age-rating">
                                <img className="c-image" src="http://www.campandfurnace.com/website/wp-content/themes/campandfurnace/images/ui/button_m.png" alt="Placeholder with grey background"/>
                                <p className="c-label">Install Notes</p>
                                <p className="c-paragraph">Cable South Wall</p>
                                <div className="c-content-toggle">
                                    <ul className="c-list f-bare f-lean" id="learn-more" data-f-expanded="false">
                                        <li>Downstairs dining room</li>
                                    </ul>
                                    <button data-f-more="More" data-f-less="Less" data-f-show="0" aria-hidden="true">More</button>
                                </div>
                            </div>
                            <div className="c-content-toggle">
                                <p id="content-toggle-target" data-f-expanded="false">
                                    <strong>Permissions</strong>
                                    <br/>{user.install && user.install["permission"]}
                                </p>
                                <button data-f-more="Show more" data-f-less="Show less" data-f-show="3" aria-hidden="true">Show more</button>
                            </div>
                        </div>
                </div>
            </div>


class Cases extends Component {
    state = {cases: []};

    componentDidMount() {
        // elegant APIs around XHR, available now in Firefox and Chrome Canary
        fetch ('/api/query/case?ex_cols=status', {
            headers: new Headers({
                'Content-Type': 'text/plain'
            })
        }).then(response => {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText));
            } else {
                // this returns a Promise to the chained method
                return response.json()
            }
        }).then(json => this.setState ({cases: json}), err => console.log(`failed to get cases : ${err}`))
    }

    render () {

        return (
            <div className="c-table f-divided"  style={{"width": "95%"}} data-f-loc-ascending="Sorted by {0} - ascending" data-f-loc-descending="Sorted by {0} - descending">
                <table data-f-sort="true">
                    <thead>
                        <tr>
                            <th scope="col" className="f-sortable" colSpan="1" aria-sort="none">
                                <button aria-label="Sort by Item">Name</button>
                            </th>
                            <th scope="col" className="f-sortable f-numerical" colSpan="1" aria-sort="none">
                                <button aria-label="Sort by Width">Date</button>
                            </th>
                            <th scope="col" className="f-sortable f-numerical" colSpan="1" aria-sort="none">
                                <button aria-label="Sort by Price">Status</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.cases.map(c => 
                            <tr key={c.id}>
                                <td>{c.name}</td>
                                <td className="f-numerical f-sub-categorical">{c.date}</td>
                                <td className="f-numerical f-sub-categorical"><strong className={`c-badge f-small ${c.status == "COMPLETED" ? "f-accent" : "f-highlight" }`}>{c.status}</strong></td>
                            </tr>
                        )}
                        { this.props.caseupdates.map(c => 
                            <tr key={c.id} className="pulseme">
                                <td>{c.name}</td>
                                <td className="f-numerical f-sub-categorical">{c.date}</td>
                                <td className="f-numerical f-sub-categorical"><strong className={`c-badge f-small ${c.status == "COMPLETED" ? "f-accent" : "f-highlight" }`}>{c.status}</strong></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ({caseupdates, user}) => 
    <div className="m-panes m-panes-section-ext" data-grid="col-12">
    <section>
        <div data-grid="col-12" style={{"paddingTop": "48px"}}>
            <Persona name={user.name} desc={user.type} image="http://getmwf.com/images/modules/persona/persona-example.jpg"/>
        </div>
        <h2 data-grid="col-12" className="c-heading-3 x-offset-content x-hidden-focus" style={{"paddingLeft":"0", "width": "90%", "borderBottom": "1px solid rgba(0, 0, 0, 0.2)"}}>Our Records:</h2>
        <AttitionalInfo user={user}/>
        <h2 data-grid="col-12" className="c-heading-3 x-offset-content x-hidden-focus" style={{"paddingLeft":"0", "width": "95%", "marginBottom": "15px", "borderBottom": "1px solid rgba(0, 0, 0, 0.2)"}}>Support Cases</h2>
        <Cases caseupdates={caseupdates}/>
        <h2 data-grid="col-12" className="c-heading-3 x-offset-content x-hidden-focus" style={{"paddingLeft":"0", "width": "90%", "borderBottom": "1px solid rgba(0, 0, 0, 0.2)"}}>Invoices:</h2>

    </section>
    <section>
        <Alert type="error" head_txt="Router Disconnecting" body_txt="We've detected a potential issue"/>
        <Persona name="TT-BOT" desc="Connectivity Specilist" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cartoon_Robot.svg/407px-Cartoon_Robot.svg.png"/>
        <div style={{"position": "relative", "height": "550px", "textAlign": "left"}}>
        <Chat directLine={{ secret: "u4bZOm1uSxs.cwA.Eys.UvHxV4aVgyLy5URqn1pzgChyk7b0CGHY8nAN3GeeL4U" }} user={{ id: 'Keith', name: 'Keith' }}/>
        </div>
    </section>
    </div>
