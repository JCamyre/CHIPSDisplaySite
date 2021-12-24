import React, { useState } from 'react';
import Students from './People.json';
import Person from '../Person/Person';
import Carousel from "react-bootstrap/Carousel";
import './Testing.css';

// https://stackoverflow.com/questions/5978519/how-to-use-setinterval-and-clearinterval

function Testing() {
    const [student1, setStudent1] = useState(Students[0]);
    const [student2, setStudent2] = useState(Students[1]);

    var i = 0;
    console.log(JSON.stringify(Students));
    console.log(Students[0], Students[1], Students[2], Students[3]);


    return (
        <div>
            <h1>Testing</h1>
            <h2>Students</h2>
        <Carousel interval={1000} controls={false} indicators={false}>
        {Students.map((student, index) => (
            ((index%2===0) && (
                <Carousel.Item key={index}>
                                    <p>{index}</p>
                    <Person 
                        name={Students[index].name}
                        major={Students[index].major} 
                        primary_area={Students[index].primary_area}
                        img={Students[index].img}
                        email={Students[index].email}
                        linkedin={Students[index].linkedin}
                    />
                    <Person 
                        name={Students[index+1].name}
                        major={Students[index+1].major} 
                        primary_area={Students[index+1].primary_area}
                        img={Students[index+1].img}
                        email={Students[index+1].email}
                        linkedin={Students[index+1].linkedin}
                    />
                </Carousel.Item>
            ))
        ))}
      </Carousel>
        </div>
    )
}

export default Testing
