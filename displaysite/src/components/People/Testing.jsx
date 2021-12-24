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

    setInterval(function(){
        setStudent1(Students[i%4]);
        setStudent2(Students[(i+1)%4]);
        // console.log(i, i%4);
        console.log('********************');
        i+=2;
    }, 30000);

    return (
        <div>
            <h1>Testing</h1>
            <h2>Students</h2>
            <Carousel interval={4000} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedelightfullaugh.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fsmashed-double-cheeseburger.jpg&f=1&nofb=1"
            }
            alt=""
          />
          <img
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedelightfullaugh.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fsmashed-double-cheeseburger.jpg&f=1&nofb=1"
            }
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dubbysburgers.com%2Fwp-content%2Fuploads%2F2020%2F07%2FPBP_4641.jpg&f=1&nofb=1"
            }
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2018%2F09%2F18%2FPREN%2F47df5f97-9b6e-4df6-8e47-44789273fe91-CB_5_Guys_Bacon_Cheeseburger.jpg%3Fcrop%3D2993%2C1677%2Cx0%2Cy0%26width%3D3200%26height%3D1680%26fit%3Dbounds&f=1&nofb=1"
            }
            alt=""
          />
        </Carousel.Item>
      </Carousel>
                {/* <div>
                    <Person 
                        name={student1.name}
                        major={student1.major} 
                        primary_area={student1.primary_area}
                        img={student1.img}
                        email={student1.email}
                        linkedin={student1.linkedin}
                    />
                    <Person 
                        name={student2.name}
                        major={student2.major} 
                        primary_area={student2.primary_area}
                        img={student2.img}
                        email={student2.email}
                        linkedin={student2.linkedin}
                    />
                </div> */}
        </div>
    )
}

export default Testing
