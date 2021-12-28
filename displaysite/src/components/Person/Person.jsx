import React from 'react';
import './Person.css';

function Person({name, title, major, primary_area, secondary_area, email, img, linkedin, research_lab, research_lab_url}) {
    return (
        <div>
            <div>
                <img src={img} alt='Profile Picture' />
            </div>
            <div>
                <h3>{name}</h3>
                {(title) && 
                    (<i>{title}</i>)
                }
                <h4>{(major) && (
                    <i>{major}</i>
                )}</h4>
                <h4>Primary area: {primary_area}</h4>
                {(secondary_area) && (
                    <h4>Secondary Area: {secondary_area}</h4>
                )}
                <h4>Email: {email}</h4>
                {(research_lab) && (
                    <a href={research_lab_url}>{research_lab}</a>
                )}
                {(linkedin) && (
                    <a href={linkedin}>LinkedIn Profile</a>
                )}
            </div>
        </div>
    )
}

export default Person
