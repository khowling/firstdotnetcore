import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {Persona, Alert, Histogram} from './common.js'

export const Landing = () => [
    <PackageHeading/>,
    <MyProducts/>
]
export const PackageHeading = () => 
    <div data-grid="col-12" className="m-banner">
        <h2 className="c-heading-3">Are you getting the most from your package?</h2>
        <p className="c-caption-2">using the data we have captured, lets optimise.</p>
    </div>

export class MyProducts extends Component {
    state = { disconent_err: false,
              band_err: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({disconent_err: true}), 4000)
    }
    
    render() {
        return (
        <div className="m-content-placement"  data-grid="col-12 pad-2x">
            <div data-grid="col-4">
                <section className="m-content-placement-item f-size-medium" >
                    <div style={{"background": "#F2F2F2", "width": "100%", "height": "150px", "text-align": "center"}}>
                        <i className="fa fa-tachometer fa-4x" style={{"margin-top": "50px", "color": "#757575"}} aria-hidden="true" ></i>
                    </div>
                    <h3 className="c-heading">Faster Fibre Broadband</h3>
                    <p className="c-paragraph">Are you getting the best out of your service? See your usages patterns below</p>
                    <a href="getting-started/designing/imagery.html" className="c-call-to-action c-glyph" aria-label="Important: Learn more about Imagery"><span>DETAILED USAGE DATA</span></a>
                </section>

                
                { this.state.disconent_err && <Alert type="error" head_txt="Router Disconnecting" body_txt="We've detected a potential issue"/> }
                { this.state.band_err  && <Alert type="information" head_txt="Regulary Exceeding Bandwidth" body_txt="We've detected a potential issue"/> }
                
                <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements f-single-column" style={{"padding": "0"}}>
                    <div className="c-table f-divided">
                        <table>
                            <tbody>
                                <tr>
                                    <th scope="row">Devices</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td className="c-subheading"><strong>2</strong> new devices connected to your network at peek usage.</td>
                                </tr>
                                <tr>
                                    <th scope="row">Reliability</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-down fa-2x" aria-hidden="true" style={{ "color": "red"}}></i></td>
                                    <td><strong>85%</strong>Your network is not at optimum relability, Please see Alert</td>
                                </tr>
                                <tr>
                                    <th scope="row">Uterlization</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td><strong>23%</strong> increased bandwidth demands month over month</td>
                                </tr>

                            
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>


            <div data-grid="col-4">
                <section className="m-content-placement-item f-size-medium" data-js-href="http://getmwf.com/getting-started/designing/">
                    <div style={{"background": "#F2F2F2", "width": "100%", "height": "150px", "text-align": "center"}}>
                        <i className="fa fa-volume-control-phone fa-4x" style={{"margin-top": "50px", "color": "#757575"}} aria-hidden="true" ></i>
                        </div>
                        <h3 className="c-heading">Home Phone</h3>
                        <p className="c-paragraph">Key summary information about your Home phone usage, are you taking advantage of cheap rate calling.</p>
                        <a href="getting-started/designing/imagery.html" className="c-call-to-action c-glyph" aria-label="Important: Learn more about Imagery"><span>DETAILED USAGE DATA</span></a>
                </section>    

                <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements f-single-column" style={{"padding": "0"}}>
                    <div className="c-table f-divided">
                        <table>
                            <tbody>
                                <tr>
                                    <th scope="row">Local Calls</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td className="c-subheading"><strong>25hr</strong> great usage of local calls saving you money!</td>
                                </tr>
                                <tr>
                                    <th scope="row">Long Distance</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td><strong>3%</strong> increased in oversees calls, you are calling 2 numbers frequently, see recommendation</td>
                                </tr>
                                <tr>
                                    <th scope="row">% outside evenings/weekends</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-down fa-2x" aria-hidden="true" style={{ "color": "red"}}></i></td>
                                    <td><strong>-23%</strong> decreced in cheap-rate calls</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div data-grid="col-4">
                <section className="m-content-placement-item f-size-medium" data-js-href="http://getmwf.com/getting-started/designing/imagery.html">
                    <div style={{"background": "#F2F2F2", "width": "100%", "height": "150px", "text-align": "center"}}>
                    <i className="fa fa-television fa-4x" style={{"margin-top": "50px", "color": "#757575"}} aria-hidden="true" ></i>
                    </div>

                    <h3 className="c-heading">TV</h3>
                    <p className="c-paragraph">Summary information about your TV usage, are you watching and recording all you favorate shows</p>
                    <a href="getting-started/designing/imagery.html" className="c-call-to-action c-glyph" aria-label="Important: Learn more about Imagery"><span>DETAILED USAGE DATA</span></a>
                </section>

                <div data-grid="col-12 pad-12x stack-2" className="m-system-requirements f-single-column" style={{"padding": "0"}}>
                    <div className="c-table f-divided">
                        <table>

                            <tbody>
                                <tr>
                                    <th scope="row">Devices</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td className="c-subheading"><strong>2</strong> new devices connected to your network at peek usage.</td>
                                </tr>
                                <tr>
                                    <th scope="row">Reliability</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-down fa-2x" aria-hidden="true" style={{ "color": "red"}}></i></td>
                                    <td>Please see Alert</td>
                                </tr>
                                <tr>
                                    <th scope="row">Uterlization</th>
                                    <td style={{"min-width": "0"}}><i className="fa fa-hand-o-up fa-2x" style={{ "color": "green"}} aria-hidden="true"></i></td>
                                    <td><strong>23%</strong> increased bandwidth demands month over month</td>
                                </tr>

                            
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
    }
}
