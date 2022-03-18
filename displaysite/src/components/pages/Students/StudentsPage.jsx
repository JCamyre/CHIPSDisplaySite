import React from 'react';
import { Link } from 'react-router-dom';
import StudentsData from '../../People/People.json';
import Person from '../../Person/Person';
import BackButton from '../../BackButton/BackButton';

// Display all students, rather than cycling through a few at a time

function Students() {
    return (
        <div style={{display: 'inline-block'}} className='content'>
            {StudentsData.map((student, idx)=>(
                <Person
                    key={idx}
                    name={student.name}
                    major={student.major}
                    primary_area={student.primary_area}
                    img={student.img}
                    email={student.email}
                    linkedin={student.linked}
                />
            ))}
        </div>
    )
}

export default Students
