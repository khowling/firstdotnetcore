import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CSSTransitionGroup  from 'react-transition-group/Transition'


import {Persona, Alert, Histogram} from './common.js'

export const MyUsage = ({user}) => [
    <PackageHeading key={1} user={user}/>,
    <Alerts  key={2}/>,
    <MyProducts key={3} user={user}/>
]

export const PackageHeading = ({user}) => 
    <div className="m-content-placement"  data-grid="col-12 pad-4x" style={{"marginBottom": "30px"}}>
        <div data-grid="col-3" style={{"paddingTop": "48px"}}>
            <Persona name={user.name} desc={user.type} image="http://getmwf.com/images/modules/persona/persona-example.jpg"/>
        </div>
        <div data-grid="col-8">
            <div data-grid="col-12" className="m-banner">
                <h2 className="c-heading-3">Are you getting the most from your package?</h2>
               
            </div>
        </div>
    </div>

    {/*
    <header data-grid="col-12" className="x-offset-content">
        <h3 data-grid="col-12" className="c-heading-3 x-hidden-focus">Usage Index</h3>
        <p data-grid="col-8" className="c-paragraph-3">The <i>usage index</i>  is a indication of the value you are getting from your package, and help you to maximise it, <strong>1 = you can get more value, 5 = you are maxing out your package</strong>.</p>
    </header>,
    <Histogram/>
    */}

    export class Alerts extends Component {
        state = { disconent_err: false,
                  band_err: false
        }
    
        componentDidMount() {
            setTimeout(() => this.setState({disconent_err: true}), 15000)
        }

        render() {
            return (
            <div data-grid="col-12">
                {  this.state.disconent_err && <Alert type="error" head_txt="Router Disconnecting" body_txt="We've detected a potential issue"/> }
                {  this.state.band_err && <Alert type="information" head_txt="Regulary Exceeding Bandwidth" body_txt="We've detected a potential issue"/> }
            </div>
            )
        }
}



export class MyProducts extends Component {
    state = { disconent_err: false,
              band_err: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({disconent_err: true}), 4000)
    }
    
    render() {
        return (
        <div className="m-panes m-content-placement m-panes-section-ext"  data-grid="col-12 pad-3x">

            <section data-grid="col-4">
                <section className="m-content-placement-item f-size-medium" >
                    <div style={{"background": "#F2F2F2", "width": "100%", "height": "150px", "textAlign": "center"}}>
                        <i className="fa fa-tachometer fa-4x" style={{"marginTop": "50px", "color": "#757575"}} aria-hidden="true" ></i>
                    </div>
                    <h3 className="c-heading">Faster Fibre Broadband</h3>
                    <p className="c-paragraph">Are you getting the best out of your service? See your usages patterns below</p>
                    <a href="getting-started/designing/imagery.html" className="c-call-to-action c-glyph" aria-label="Important: Learn more about Imagery"><span>DETAILED USAGE DATA</span></a>
                </section>

                <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements f-single-column" style={{"padding": "10px"}}>
                    <div className="c-table f-divided">
                        <table>
                            <tbody>
                                <tr>
                                    <th scope="row">Devices</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td className="c-subheading"><strong>2</strong> new devices connected to your network at peek usage.</td>
                                </tr>
                                <tr>
                                    <th scope="row">Reliability</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-down fa-2x pulseme" aria-hidden="true" style={{ "color": "red"}}></i></td>
                                    <td><strong>85%</strong>Your network is not at optimum relability, Please see Alert & talk to TT-BOT to fix</td>
                                </tr>
                                <tr>
                                    <th scope="row">Uterlization</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td><strong>23%</strong> increased bandwidth demands month over month</td>
                                </tr>

                            
                            </tbody>
                        </table>
                    </div>
                </div>     
            </section>

            <section data-grid="col-4">
                <section className="m-content-placement-item f-size-medium" data-js-href="http://getmwf.com/getting-started/designing/">
                    <div style={{"background": "#F2F2F2", "width": "100%", "height": "150px", "textAlign": "center"}}>
                        <i className="fa fa-volume-control-phone fa-4x" style={{"marginTop": "50px", "color": "#757575"}} aria-hidden="true" ></i>
                        </div>
                        <h3 className="c-heading">Home Phone</h3>
                        <p className="c-paragraph">Key summary information about your home phone usage, taking advantage of cheap rate?</p>
                        <a href="getting-started/designing/imagery.html" className="c-call-to-action c-glyph" aria-label="Important: Learn more about Imagery"><span>DETAILED USAGE DATA</span></a>
                </section>    

                <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements f-single-column" style={{"padding": "10px"}}>
                    <div className="c-table f-divided">
                        <table>
                            <tbody>
                                <tr>
                                    <th scope="row">Local Calls</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td className="c-subheading"><strong>25hr</strong> great increased usage of local calls!</td>
                                </tr>
                                <tr>
                                    <th scope="row">Long Distance</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td><strong>3%</strong> increased in oversees calls, you are calling 2 numbers frequently</td>
                                </tr>
                                <tr>
                                    <th scope="row">% outside evenings/weekends</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-down fa-2x" aria-hidden="true" style={{ "color": "orange"}}></i></td>
                                    <td><strong>-23%</strong> decreced in cheap-rate calls</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section data-grid="col-4">
                <section className="m-content-placement-item f-size-medium" data-js-href="http://getmwf.com/getting-started/designing/imagery.html">
                    <div style={{"background": "#F2F2F2", "width": "100%", "height": "150px", "textAlign": "center"}}>
                    <i className="fa fa-television fa-4x" style={{"marginTop": "50px", "color": "#757575"}} aria-hidden="true" ></i>
                    </div>

                    <h3 className="c-heading">TV</h3>
                    <p className="c-paragraph">Summary information about your TV usage, are you watching your favorate shows</p>
                    <a href="getting-started/designing/imagery.html" className="c-call-to-action c-glyph" aria-label="Important: Learn more about Imagery"><span>DETAILED USAGE DATA</span></a>
                </section>

                <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements f-single-column" style={{"padding": "10px"}}>
                    <div className="c-table f-divided">
                        <table>

                            <tbody>
                                <tr>
                                    <th scope="row">Packages</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td className="c-subheading"><strong>60%</strong> you are paying for packages that you're not using, see details.</td>
                                </tr>
                                <tr>
                                    <th scope="row">TVs</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-down fa-2x" aria-hidden="true" style={{ "color": "orange"}}></i></td>
                                    <td><strong>1</strong> You can watch your TV on more than one TV, see details, or talk to TT-BOT to find out more</td>
                                </tr>
                                <tr>
                                    <th scope="row">Uterlization</th>
                                    <td style={{"minWidth": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td><strong>23%</strong> increased bandwidth demands month over month</td>
                                </tr>

                            
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </div>
    )
    }
}
