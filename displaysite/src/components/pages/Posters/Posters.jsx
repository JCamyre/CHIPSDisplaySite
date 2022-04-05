import React from 'react'
import BackButton from './../../BackButton/BackButton';
import { Container, Box } from '@mui/material';

function Posters() {
  return (
    <Container className='content' maxWidth='lg'>
        <BackButton />
        <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)'}}>
          <h1>INSERT POSTERS HERE</h1>  
        </Box>
    </Container>
  )
}

export default Posters