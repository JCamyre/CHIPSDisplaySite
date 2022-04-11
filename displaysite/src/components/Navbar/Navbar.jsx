import React from 'react';
import './Navbar.css';
import logo from '../../images/CHIPS-logo.png';

function Navbar() {
    return (
        <header id="flex-container" style={{display: "flex"}}>
            <div>
            <img id='CHIPS-logo' src={logo} alt='CHIPS logo' />

            </div>
            <div>
            <span style={{color: "white", fontSize: 48}}>TOUCH ME!</span>
            </div>
        </header>
    )
}

export default Navbar
