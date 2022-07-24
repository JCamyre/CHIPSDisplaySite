import React from 'react'
import Link from 'next/link'
import Carousel from "react-bootstrap/Carousel";
import FacultyData from '../Faculty.json';
import Person from '../Person/Person';
import Button from '@mui/material/Button';
import './Faculty.css';

function Faculty() {

    FacultyData.sort(function(a, b){
        let lastname1 = a['name'].split(' ')[1];
        let lastname2 = b['name'].split(' ')[1];

        if (lastname1 < lastname2) {
            return -1;
        } else if (lastname1 > lastname2) {
            return 1;
        }
        return 0;
    });

    return (
        <div style={{textAlign: 'center'}}>
            <div style={{textAlign: 'left'}}>

            <h1>Faculty</h1>
            <Carousel interval={30000} controls={false} indicators={false}>
        {FacultyData.map((student, index) => (
            ((index%2===0) && (
                <Carousel.Item key={index}>
                    <Person 
                        name={FacultyData[index].name}
                        major={FacultyData[index].major} 
                        primary_area={FacultyData[index].primary_area}
                        img={FacultyData[index].img}
                        email={FacultyData[index].email}
                        linkedin={FacultyData[index].linkedin}
                        research_lab={FacultyData[index].research_lab}
                        research_lab_url={FacultyData[index].research_lab_url}
                    />
                    <Person 
                        name={FacultyData[index+1].name}
                        major={FacultyData[index+1].major} 
                        primary_area={FacultyData[index+1].primary_area}
                        img={FacultyData[index+1].img}
                        email={FacultyData[index+1].email}
                        linkedin={FacultyData[index+1].linkedin}
                        research_lab={FacultyData[index+1].research_lab}
                        research_lab_url={FacultyData[index+1].research_lab_url}
                    />
                </Carousel.Item>
            ))
        ))}
      </Carousel>
      </div>
      <Link href='/faculty'>
            <Button style={{fontSize: "40px", backgroundColor: '#1f497d', width: '98%'}} variant='contained' fontSize='inherit'>See all faculty</Button>
        </Link> 

    </div>
    )
}

export default Faculty;