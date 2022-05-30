import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function BackButton({path='/'}) {
    return (
        <div>
            <Link style={{textDecoration: 'none'}} to={path}><Button style={{color: '#1f497d', fontSize: "48px", backgroundColor: '#fff', boxShadow: '0 14px 8px -4px rgba(0, 0, 0, 0.1)'}} variant='contained'>Go Back</Button></Link>      
        </div>
    )
}

export default BackButton
