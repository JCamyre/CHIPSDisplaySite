import React from 'react';
// import Person from './Person';
// import FacultyMembers from '../components/Faculty.json';
import { Stack, Box } from '@mui/material'

function Faculty({people}) {

    return (
        <Stack justifyContent='center' alignItems='center' className='content'>
            <h1 className='header'>Faculty</h1>
            {people && people.map((person, idx)=>(
                <Box className='profile-box'>
                    <Box>
                        <a href={person.img_ref}>
                            <img className='profile-pic' src={person.img_loc} alt="Profile Picture" />
                        </a>
                    </Box>
                    {/* <a href={person.img_ref}><img src={person.img_loc} /></a> */}
                    <div dangerouslySetInnerHTML={{ __html: person.body }} />
                </Box>
            ))}
            {/* {FacultyMembers.map((faculty, idx)=>(
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
            ))} */}
        </Stack>

    )
}



export default Faculty
