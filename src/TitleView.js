import React from 'react'
import logo from './3canardslogo.png';
import NavBar from './NavBar';

export default function TitleView() {
    return (
        <div className="main-title">
            <div className="bandeau"></div>
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar />
        </div>
    )
}


export function PresentationView() {
    return (
    <div className="features-small-item presview">
        <p>Les trois canards reviennents ....bla bla bla</p>
            
        </div>
    )
}
