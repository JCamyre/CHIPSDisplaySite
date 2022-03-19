import React from 'react';
import FacultyPage from '../Faculty/FacultyPage'
import StudentsPage from '../Students/StudentsPage'
import BackButton from '../../BackButton/BackButton'
import { Container, Box } from '@mui/material'

// Display all students, rather than cycling through a few at a time

function Students() {
    return (
        <Container className='content' maxWidth='lg'>
          <BackButton />
          <Box>
            <FacultyPage />
          </Box>
          <Box style={{paddingTop: '40px'}}>
            <StudentsPage />
          </Box>
        </Container>
    )
}

export default Students
