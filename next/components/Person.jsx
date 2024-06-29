import React from 'react';
import { Box } from '@mui/material'

// Custom QR code for each person, send them an email/a page to have all their info

function Person({name, title, major, primary_area, secondary_area, email, img, linkedin, research_lab, research_lab_url}) {
    return (
        <Box className='profile-box'>
            <Box>
                <img className='profile-pic' src={img} alt={`${name}'s Profile Picture`} />
            </Box>
            <Box>
                <h3>{name}</h3>
                {(title) && 
                    (<i>{title}</i>)
                }
                <h4>{(major) && (
                    <i>{major}</i>
                )}</h4>
                <h4>Primary area: {primary_area}</h4>
                <h4>{(secondary_area) && (
                    <>Secondary Area: {secondary_area}</>
                )}</h4>
                <h4>Email: {email}</h4>
                {(research_lab) && (
                    <h4>Lab: <a href={research_lab_url}>{research_lab}</a></h4>
                )}
                {(linkedin) && (
                    <span>
                        <h4>
                            <a href={linkedin} target='_blank' rel='noopener noreferrer' style={{display: 'flex', alignItems: 'center'}}>
                                <img id='logo' src='https://www.renlearn.co.uk/wp-content/uploads/2020/04/LinkedIn-Logo.png' alt='Linkedin Logo' />
                                LinkedIn Profile
                            </a>
                        </h4>
                    </span>
                )}
            </Box>
        </Box>
    )
}

export default Person
