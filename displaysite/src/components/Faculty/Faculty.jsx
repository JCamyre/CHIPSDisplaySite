import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import FacultyData from '../People/Faculty.json';
import Person from '../Person/Person';
import Button from '@mui/material/Button';

function Faculty() {
    return (
        <div>
            <h2>Faculty</h2>
            <Carousel controls={false} indicators={false}>
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
                    />
                    <Person 
                        name={FacultyData[index+1].name}
                        major={FacultyData[index+1].major} 
                        primary_area={FacultyData[index+1].primary_area}
                        img={FacultyData[index+1].img}
                        email={FacultyData[index+1].email}
                        linkedin={FacultyData[index+1].linkedin}
                    />
                </Carousel.Item>
            ))
        ))}
      </Carousel>
      <Link to='/faculty'>
      <Button style={{fontSize: "40px", backgroundColor: '#1f497d'}} variant='contained' fontSize='inherit'>See all faculty</Button>
        </Link>
        </div>
    )
}

export default Faculty
