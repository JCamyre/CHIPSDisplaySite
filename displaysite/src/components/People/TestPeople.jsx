import React from 'react';
import Person from '../Person/Person';
// import './People.css';

// Pass in JSON objects with name, title, etc for each person, store in an array
// Every so often (time.sleep()), arr[i%3], arr[(i+1)%3], arr[(i+2])%3], i+=3
// Pass into properties: name=arr[i%3]['name']

// Could do the slide show automatic scroll thing

function People() {
    return (
        <div className='main'>
            <h2>Faculty</h2>
                <div>
                    <Person 
                        name='Subramanian S. Iyer'
                        title='Distinguished Professor and Charles P. Reames Endowed Chair'
                        primary_area='Electrical and Computer Engineering'
                        img='https://s3.us-west-1.amazonaws.com/chips.user.media/images/users/4.png'
                        email='s.s.iyer@ucla.edu' 
                    />
                </div>
            <h2>Students</h2>
                <div>
                    <Person name='Steven Moran' primary_area='Electrical & Computer Engineering' 
                        img='https://s3.us-west-1.amazonaws.com/chips.user.media/images/users/32.png'
                        email='steven.moran@engineering.ucla.edu'
                        linkedin='https://www.linkedin.com/in/smoran1'
                    />
                    <Person name='Joseph Camyre' 
                        primary_area='Software Systems'
                        img='https://s3.us-west-1.amazonaws.com/chips.user.media/images/users/97.png'
                        email='jcamyre127@g.ucla.edu'
                        linkedin='https://www.linkedin.com/in/josephscamyre/' 
                    />
                </div>
        </div>

    )
}

export default People