import React from 'react';
import Event from '../Event/Event';

// They are actually sorted by date, but since we are taking it from the website should be fine.
function Events() {
    return (
        <div>
            <Event 
                title='UCLA CHIPS / GATech PRC Distinguisted Lecture'
                link='https://chips.ucla.edu/events/show/19'
                datetime='Dec 9, 2021 8:00 AM - 9:00 AM'
            />
            <Event
                title='2021 UCLA CHIPS Workshop'
                link='https://chips.ucla.edu/events/show/18'
                datetime='Dec 1, 2021 8:00 AM - 6:00 PM'
            />
        </div>
    )
}

export default Events
