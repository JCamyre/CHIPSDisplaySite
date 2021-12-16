import React from 'react';
import TestPeople from '../../People/TestPeople';
import Navbar from '../../Navbar/Navbar';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import Testing from '../../People/Testing';
import Students from '../../pages/Students/Students';
import './Home.css';

function Home() {
    return (
        <div>
            {/* <Testing /> */}
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                        {/* <TestPeople /> */}
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
