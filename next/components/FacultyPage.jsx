import React from 'react';
import Person from './Person';
import FacultyMembers from '../components/Faculty.json';
import { Stack } from '@mui/material'

function Faculty({people}) {

    return (
        <Stack justifyContent='center' alignItems='center' className='content'>
            <h1 className='header'>Faculty</h1>
            {people && people.map((person, idx)=>(
                <>
                    <p key={idx}>{person.name}</p>
                </>
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


// import React, {useEffect} from 'react';
// import Person from './Person';
// import { Stack } from '@mui/material'
// import FacultyMembers from "./Faculty.json"

// // Move get people into components?
// import getPeople from "../scripts/getPeople"

// // Instead of reading from Faculty.json, read from getStaticProps()

// function Faculty({facultyMembers}) {

//     useEffect(() => {
//         (async () => {
//             // const temp = [{"name": "Joseph"}, {"name": "Camyre"}]
//             const allPeople = await getPeople();

//             allPeople.map((faculty, idx) => (
//                 console.log(faculty)
//             ))
//         })();

//     }, [])

//     return (
//         <Stack justifyContent='center' alignItems='center' className='content'>
//             <h1 className='header'>Faculty</h1>
//             {facultyMembers && facultyMembers.map((faculty, idx)=>(
//                 <>
//                     <p>{faculty.name}</p>
//                     {/* <Person
//                         key={idx}
//                         name={faculty.name}
//                         title={faculty.title}
//                         major={faculty.major}
//                         primary_area={faculty.primary_area}
//                         secondary_area={faculty.secondary_area}
//                         email={faculty.email}
//                         img={faculty.img}
//                         research_lab={faculty.research_lab}
//                         research_lab_url={faculty.research_lab_url}
//                     /> */}   
//                 </>
//             ))}
//         </Stack>

//     )
// }

// // Temporary

// async function getFacultyMembers() {
//     obj = [{
//         body: '<p><strong>Joseph Camyre</strong></p><p><em>Computer Science</em></p><p>Primary Area: <span style="color: rgb(34, 34, 34);">Software Systems</span></p><p>2021 - Present</p><p>Email:&nbsp;<a href="mailto:jcamyre127@g.ucla.edu" target="_blank">jcamyre127@g.ucla.edu</a></p><p><a href="https://www.linkedin.com/in/josephscamyre/" target="_blank" style="color: rgb(51, 122, 183);">LinkedIn Profile</a></p>',
//         img_loc: 'https://s3.us-west-1.amazonaws.com/chips.user.media/images/users/97.png',
//         userid: 97,
//         img_ref: 'https://josephcamyre.com/',
//         body_updated: true
//       },
//       {
//         body: '<p><strong>Zoe Chen</strong></p><p><em>Electrical and Computer Engineering</em></p><p>Primary Research Interests: Undecided</p><p>2022 - Present</p><p>Email:&nbsp;<a href="mailto:ayya0531@g.ucla.edu" target="_blank">ayya0531@g.ucla.edu</a></p><p><a href="https://www.linkedin.com/in/zoe-chen-675523222" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(51, 122, 183);">LinkedIn Profile</a></p>',
//         img_loc: 'https://s3.us-west-1.amazonaws.com/chips.user.media/images/users/103.png',
//         userid: 103,
//         img_ref: null,
//         body_updated: true
//       }]
//     return obj;
// }

// export async function getStaticProps() {
//     // const facultyMembers = await getFacultyMembers();

//     // console.log(facultyMembers)

//     const facultyMembers = [{"name": "Joseph"}, {"name": "Camyre"}]

//     return {
//         props: {
//             facultyMembers,
//         },
//         revalidate: 10
//     }
// }

// export default Faculty

