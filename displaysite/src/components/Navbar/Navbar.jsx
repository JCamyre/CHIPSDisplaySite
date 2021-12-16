import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/CHIPS-logo.png';

function Navbar() {
    return (
        <div>
            <header>
                <Link to='/'>
                    <img id='CHIPS-logo' src={logo} alt='CHIPS logo' />
                </Link>
            </header>
        </div>
    )
}

export default Navbar
