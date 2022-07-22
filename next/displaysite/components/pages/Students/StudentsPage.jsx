import React from 'react';
import { Link } from 'react-router-dom';
import StudentsData from '../../People/People.json';
import Person from '../../Person/Person';
import BackButton from '../../BackButton/BackButton';
import { Stack } from '@mui/material';

function Students() {

    function GetSortOrder(prop) {    
        return function(a, b) {
            a = a['name'].split(' ');
            b = b['name'].split(' ');    
            if(a.length > 2)
            {
                a = a[2];
            } else {
                a = a[1];
            }
            if (b.length > 2)
            {
                b = b[2];
            } else {
                b = b[1];
            }

            if (a > b) {    
                return 1;    
            } else if (a < b) {    
                return -1;    
            }    
            return 0;    
        }    
    }    
    StudentsData.sort(GetSortOrder("name"))


    return (
        <Stack justifyContent='center' alignItems='center' className='content'>
            <h1>Students</h1>
            {StudentsData.map((student, idx)=>(
                <Person
                    key={idx}
                    name={student.name}
                    major={student.major}
                    primary_area={student.primary_area}
                    img={student.img}
                    email={student.email}
                    linkedin={student.linkedin}
                />
            ))}
        </Stack>
    )
}

export default Students
