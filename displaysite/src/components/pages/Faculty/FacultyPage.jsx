import React from 'react';
import Person from '../../Person/Person';
import FacultyMembers from '../../People/Faculty.json';
import { Stack } from '@mui/material'

function Faculty() {
    // Maybe try no className='content'?
    return (
        <Stack justifyContent='center' alignItems='center' className='content'>
            <h1>Faculty:</h1>
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
        </Stack>
    )
}

export default Faculty
