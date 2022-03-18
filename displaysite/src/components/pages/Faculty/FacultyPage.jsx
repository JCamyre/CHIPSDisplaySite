import React from 'react';
import Person from '../../Person/Person';
import FacultyMembers from '../../People/Faculty.json';
import BackButton from '../../BackButton/BackButton';


function Faculty() {
    return (
        <div style={{display: 'inline-block'}} className='content'>
            {FacultyMembers.map((faculty, idx)=>(
                <Person
                    key={idx}
                    name={faculty.name}
                    title={faculty.title}
                    major={faculty.major}
                    primary_area={faculty.primary_area}
                    secondary_area={faculty.secondary_area}
                    email={faculty.email}
                    img={faculty.img}
                    research_lab={faculty.research_lab}
                    research_lab_url={faculty.research_lab_url}
                />
            ))}
        </div>
    )
}

export default Faculty
