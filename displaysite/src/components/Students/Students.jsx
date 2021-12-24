import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import StudentsData from '../People/People.json';
import Person from '../Person/Person';

function Students() {
    return (
        <div>
            <Link to='/students'><h2>Students</h2></Link>
            <Carousel controls={false} indicators={false}>
        {StudentsData.map((student, index) => (
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
    )
}

export default Students
