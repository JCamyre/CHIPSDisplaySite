import React from 'react';
import People from '../../People/People';
import Navbar from '../../Navbar/Navbar';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import './Home.css';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                        {/* <People /> */}
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
