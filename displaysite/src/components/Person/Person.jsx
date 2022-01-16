import React from 'react';
import './Person.css';

// Custom QR code for each person, send them an email/a page to have all their info

function Person({name, title, major, primary_area, secondary_area, email, img, linkedin, research_lab, research_lab_url}) {
    return (
        <div className='profile-box'>
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
                {/* {(linkedin) && (
                    <h4><a href={linkedin}><img id='logo' src='https://www.renlearn.co.uk/wp-content/uploads/2020/04/LinkedIn-Logo.png'  alt='Linkedin Logo' />LinkedIn Profile</a></h4>
                )} */}
            </div>
        </div>
    )
}

export default Person
