import React from 'react';
import { Link } from 'react-router-dom';
import StudentsData from '../../People/People.json';
import Person from '../../Person/Person';

// Display all students, rather than cycling through a few at a time

function Students() {
    return (
        <div>
            {StudentsData.map((student)=>(
                <Person
                    name={student.name}
                    major={student.major}
                    primary_area={student.primary_area}
                    img={student.img}
                    email={student.email}
                    linkedin={student.linked}
                />
            ))}
            <Link to='/students'>Students</Link>
        </div>
    )
}

export default Students
