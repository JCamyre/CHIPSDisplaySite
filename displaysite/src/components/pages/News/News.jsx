import React from 'react'
// import getNews from '../../../scripts/getNews'
import BackButton from './../../BackButton/BackButton';
import { Box, Container } from '@mui/material';
import NewsArticles from '../../EngineeringNews/News';

function News() {
  // 'https://samueli.ucla.edu/news-events/'
  return (
    <Container className='content' maxWidth='lg'>
      <BackButton />

      <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 20px 8px -4px rgb(142, 215, 240)'}}>
          <NewsArticles />
      </Box>
      {/* <embed src='https://www.ee.ucla.edu' style={{width: '500px', height: '300px'}} /> */}
    </Container>
  )
}

export default News