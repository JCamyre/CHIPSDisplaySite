import React from 'react';
import TestPeople from '../../People/TestPeople';
import Navbar from '../../Navbar/Navbar';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import Testing from '../../People/Testing';
import Students from '../../Students/Students';
import Faculty from '../../Faculty/Faculty';
import './Home.css';
import QRCode from '../../../images/QRCode.png';


function Home() {
    return (
        <div>
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                        <Students />
                        <Events />
                    </div>
                    <div className='column'>
                        <Faculty />
                        <Publications />
                    </div>
                </div>
                <img className='qrcode' src={QRCode} alt='QRCode' />    
            </div>
        </div>
    )
}

export default Home
