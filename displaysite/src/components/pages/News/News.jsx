import React, { useEffect, useState } from 'react'
// import getNews from '../../../scripts/getNews'
import BackButton from './../../BackButton/BackButton';
import { Box, Container } from '@mui/material';
import NewsArticles from '../../EngineeringNews/News';
import axios from 'axios';  


async function getArticle()
{
  console.log('Fetching all articles from Firestore!');
  axios.get('api/scrape_all_articles').then(res => {
    console.log("Results: ", res)
  }).catch(err => {
    console.log(err)
  });
}

function News() {

  useEffect(() => {
    getArticle();
  }, [])

  // 'https://samueli.ucla.edu/news-events/'
  return (
    <Container className='content' maxWidth='lg'>
      <BackButton />

      <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 14px 8px -4px rgba(0, 0, 0, 0.1)'}}>
          <Container>
            <NewsArticles />
          </Container>
      </Box>
      {/* <embed src='https://www.ee.ucla.edu' style={{width: '500px', height: '300px'}} /> */}
    </Container>
  )
}

export default News