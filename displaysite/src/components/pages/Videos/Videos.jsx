import Video from '../../Video/Video';
import BackButton from '../../BackButton/BackButton';
import React from 'react'
import { Container, Stack } from '@mui/material';

function Videos() {
    return (
        <Container className='content' maxWidth='lg'>
            <BackButton />   
            <Stack alignItems='center' justifyContents='center' style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 14px 8px -4px rgba(0, 0, 0, 0.1)'}}>
                <h1>Videos </h1>
                <Video url='https://www.youtube.com/watch?v=cxRDNjvUFXM' />
                <Video url='https://www.youtube.com/watch?v=g1e11lsrSvw' />
            </Stack>
        </Container>
    )
}

export default Videos