import React from 'react';
import TestPeople from '../../People/TestPeople';
import Navbar from '../../Navbar/Navbar';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import Testing from '../../People/Testing';
import Students from '../../Students/Students';
import './Home.css';



function Home() {
    return (
        <div>
            <div className='content'>
            <div className='row'>
                    <div className='column'>
                        <Students />
                    </div>
                    <div className='column'>
                        <Events />
                        <Publications />
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home
