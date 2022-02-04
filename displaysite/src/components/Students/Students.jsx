import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import StudentsData from '../People/People.json';
import Person from '../Person/Person';
import './Students.css';
import Button from '@mui/material/Button';

// sort by name

function Students() {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{textAlign: 'left'}}>
            <h1>Students</h1>
            <Carousel interval={25000} indicators={false} controls={false}>
                {StudentsData.map((student, index) => (
                    // Only do even indexes, 0, 2, 4, etc. So that we can also display index+1 (1, 3, 5, etc.)
                    ((index%2===0) && (
                        <Carousel.Item key={index}>
                            <Person 
                                name={StudentsData[index].name}
                                major={StudentsData[index].major} 
                                primary_area={StudentsData[index].primary_area}
                                img={StudentsData[index].img}
                                email={StudentsData[index].email}
                                linkedin={StudentsData[index].linkedin}
                            />
                            <Person 
                                name={StudentsData[index+1].name}
                                major={StudentsData[index+1].major} 
                                primary_area={StudentsData[index+1].primary_area}
                                img={StudentsData[index+1].img}
                                email={StudentsData[index+1].email}
                                linkedin={StudentsData[index+1].linkedin}
                            />
                        </Carousel.Item>
                    ))
                ))}
      </Carousel>
        </div>
      <Link to='/students'>
          <Button style={{fontSize: "39px", backgroundColor: '#1f497d', width: '98%'}} variant='contained' fontSize='inherit'>See all students</Button>
        </Link>
    </div>
    )
}

export default Students
