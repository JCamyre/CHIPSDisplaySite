import React from 'react';
import People from '../../People/People';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import About from '../../About/About';

function Home() {
    return (
        <div>
            <div className='content'>
                <About />
                <People />
                <Events />
                <Publications />
            </div>
        </div>

    )
}

export default Home
