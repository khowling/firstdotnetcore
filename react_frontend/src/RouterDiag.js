import React, { Component } from 'react'

export default  () => {
    
    
    
    return (
    <div style={{"margin": "auto", "width": "70%" }}>
        <div>


            <input style={{"margin-top": "40px", "width": "855px"}} type="text" name="forward-field" placeholder="http://192.168.0.1/routerdiag"/>
            <img ref={(img) => { setTimeout(()=> { img.src = "http://m1.ttxm.co.uk/sites/rightnow/broadband/Router_Setup/Newer_GUI_summary_page.png" }, 3000)}} style={{"border": "3px solid gray", "padding": "10px"}} 
                src="http://placehold.it/827x625?text=loading.."/>
        </div>
        <button name="button" class="c-button f-primary" onClick={() => window.close()}>Send to T-BOT</button>
    </div>
    )
}