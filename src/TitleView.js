import React from 'react'
import logo from './3canardslogo.png';

export default function TitleView() {
    return (
        <div style={{fontSize:"1.5em",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Les trois canards</h1>
        </div>
    )
}
