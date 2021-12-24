import React from 'react';
import TestPeople from '../../People/TestPeople';
import Navbar from '../../Navbar/Navbar';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import Testing from '../../People/Testing';
import './Home.css';



function Home() {
    return (
        <div>
            <div className='content'>
            <div className='row'>
                    <div className='column'>
                        <TestPeople />
                    </div>
                    <div className='column'>
                        <Events />
                        <Publications />
                    </div>
                </div>
                <Testing />

            </div>      
        </div>
    )
}

export default Home
