import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link'

function BackButton({path='/', style}) {
    const buttonStyles = {color: '#1f497d', fontSize: "48px", backgroundColor: '#fff', boxShadow: '0 14px 8px -4px rgba(0, 0, 0, 0.1)', fontFamily: 'Poppins, Arial', ...style}

    return (
        <div>
            <Link style={{textDecoration: 'none'}} href={path}>
                <Button style={buttonStyles} variant='contained'>Go Back</Button>
            </Link>      
        </div>
    )
}

export default BackButton
