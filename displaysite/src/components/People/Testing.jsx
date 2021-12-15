import React, { useState } from 'react';
import Students from './People.json';
import Person from '../Person/Person';

// https://stackoverflow.com/questions/5978519/how-to-use-setinterval-and-clearinterval

function Testing() {
    const [student1, setStudent1] = useState(Students[0]);
    const [student2, setStudent2] = useState(Students[1]);

    var i = 0;
    console.log(JSON.stringify(Students));
    console.log(Students[0], Students[1], Students[2], Students[3]);

    setInterval(function(){
        console.log(Students[i%4]);
        setStudent1(Students[i%4]);
        console.log(Students[(i+1)%4]);
        setStudent2(Students[(i+1)%4]);
        console.log(i, i%4);
        console.log('********************');
        i+=2;
    }, 3000);

    return (
        <div>
            <h2>Students</h2>
                <div>
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
                </div>
        </div>
    )
}

export default Testing
