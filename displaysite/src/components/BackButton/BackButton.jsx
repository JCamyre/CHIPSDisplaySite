import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <div>
            <Link style={{textDecoration: 'none'}} to='/'><Button style={{color: '#1f497d', fontSize: "48px", backgroundColor: '#fff', boxShadow: '0 8px 8px -4px rgb(142, 215, 240)'}} variant='contained'>Go Back</Button></Link>      
        </div>
    )
}

export default BackButton
