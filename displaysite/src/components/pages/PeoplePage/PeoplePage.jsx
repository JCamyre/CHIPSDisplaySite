import React from 'react';
import FacultyPage from '../Faculty/FacultyPage'
import StudentsPage from '../Students/StudentsPage'
import BackButton from '../../BackButton/BackButton'

// Display all students, rather than cycling through a few at a time

function Students() {
    return (
        <div className='content'>
          <BackButton />
          <div>
            <FacultyPage />
          </div>
          <div style={{paddingTop: '40px'}}>
            <StudentsPage />
          </div>
        </div>
    )
}

export default Students
