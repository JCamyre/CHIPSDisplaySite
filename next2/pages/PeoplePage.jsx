import React from 'react';
import FacultyPage from './FacultyPage'
import StudentsPage from './StudentsPage'
import BackButton from '../../components/BackButton/BackButton'
import { Container, Box } from '@mui/material'

// Display all students, rather than cycling through a few at a time

function Students() {
    return (
        <Container className='content' maxWidth='lg'>

          <BackButton />
          <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 14px 8px -4px rgba(0, 0, 0, 0.1)'}}>

          <Box>
            <FacultyPage />
          </Box>
          <Box>
            <StudentsPage />
          </Box>
          </Box>
        </Container>
    )
}

export default Students
