import React from 'react';
import Person from './Person';
import FacultyMembers from '../components/Faculty.json';
import { Stack } from '@mui/material'

function Faculty() {

    return (
        <Stack justifyContent='center' alignItems='center' className='content'>
            <h1 className='header'>Faculty</h1>
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


// import React from 'react';
// import Person from './Person';
// import FacultyMembers from '../components/Faculty.json';
// import { Stack } from '@mui/material'

// // Instead of reading from Faculty.json, read from getStaticProps()

// function Faculty({facultyMembers}) {

//     return (
//         <Stack justifyContent='center' alignItems='center' className='content'>
//             <h1 className='header'>Faculty</h1>
//             {facultyMembers.map((faculty, idx)=>(
//                 <Person
//                     key={idx}
//                     name={faculty.name}
//                     title={faculty.title}
//                     major={faculty.major}
//                     primary_area={faculty.primary_area}
//                     secondary_area={faculty.secondary_area}
//                     email={faculty.email}
//                     img={faculty.img}
//                     research_lab={faculty.research_lab}
//                     research_lab_url={faculty.research_lab_url}
//                 />
//             ))}
//         </Stack>

//     )
// }

// // Temporary

// async function getFacultyMembers() {
//     return {}
// }

// async function getStaticProps() {
//     const facultyMembers = 


//     return {
//         props: {
//             facultyMembers: facultyMembers,
//         },
//         revalidate: 300
//     }
// }

// export default Faculty
