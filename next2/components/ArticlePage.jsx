import React from 'react'
import { useRouter } from 'next/router';
import Articles from '../components/Articles.json';
import { Container, Box } from "@mui/material";
import BackButton from './BackButton'

function ArticlePage() {
    
    const router = useRouter();
    const { id } = router.query
    
  return (
    <Container className='content' maxWidth='lg'>
        <BackButton path='/news' />
        <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center'}}>
        {(Articles.length > id) && 
        (
            <Box style={{paddingTop: '20px', width: '80%'}}>
                <h1>
                    {Articles[id].title}
                </h1>
                <img src={Articles[id].img} style={{height: '300px'}} alt='Article Thumbnail' />
                <p>{Articles[id].date}</p>
                <h3 style={{fontStyle: 'italic'}}>"{Articles[id].summary}"</h3>
                <p>{Articles[id].full_text}</p>
            </Box>
        )}
        {(Articles.length <= id) &&
        (
            <h1>
                Error! Article does not exist!
            </h1>
        )}
        </Box>
    </Container>
  )
}

export default ArticlePage