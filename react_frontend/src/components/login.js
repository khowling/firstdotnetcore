import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CSSTransitionGroup  from 'react-transition-group/Transition'


import {Persona, Alert, Histogram} from './common.js'

export default  () => {
    return (
        <div style={{"margin": "auto", "width": "20%" }}>
            <div style={{"marginTop": "300px"}}>

                <label className="c-label">Email</label>
                <input id="default" className="c-text-field" type="text" name="default"/>

                <label className="c-label">Password</label>
                <input className="c-password" type="password" name="default"/>
            </div>

            <button  className="c-button f-primary"><Link to="/myusage">Login</Link></button>

        </div>
    )
}