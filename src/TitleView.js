import React from 'react'
import logo from './3canardslogo.png';

export default function TitleView() {
    return (
        <div className="main-title">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Les trois canards</h1>
        </div>
    )
}
