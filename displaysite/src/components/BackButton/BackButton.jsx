import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <div>
            <Link to='/'><Button style={{fontSize: "48px", backgroundColor: '#1f497d'}} variant='contained'>Go Back</Button></Link>      
        </div>
    )
}

export default BackButton
