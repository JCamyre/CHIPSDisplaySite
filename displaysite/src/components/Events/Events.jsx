import React from 'react'
import Event from '../Event/Event';

function Events() {
    return (
        <div>
            <h2>Past Events:</h2>
            <div>
                <Event title='UCLA CHIPS / GATech PRC Distinguisted Lecture' link='https://chips.ucla.edu/events/show/19' datetime='Dec 9, 2021 8:00 AM - 9:00 AM'/>
                <Event title='2021 UCLA CHIPS Workshop' link='https://chips.ucla.edu/events/show/18' datetime='Dec 1, 2021 8:00 AM - 6:00 PM' />
            </div>
        </div>
    )
}

export default Events
