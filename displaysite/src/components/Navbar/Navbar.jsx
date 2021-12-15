import React from 'react';
import './Navbar.css';
import logo from '../../images/CHIPS-logo.png';

function Navbar() {
    return (
        <div>
            <header>
                <img id='CHIPS-logo' src={logo} alt='CHIPS logo' />
            </header>
        </div>
    )
}

export default Navbar
