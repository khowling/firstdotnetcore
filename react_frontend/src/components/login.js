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

                <label class="c-label" for="default">Email</label>
                <input id="default" class="c-text-field" type="text" name="default"/>

                <label class="c-label" for="default">Password</label>
                <input class="c-password" type="password" name="default"/>
            </div>

            <button  className="c-button f-primary"><Link to="/myusage">Login</Link></button>

        </div>
    )
}