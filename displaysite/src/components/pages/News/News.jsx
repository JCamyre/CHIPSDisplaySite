import React, { useEffect, useState } from 'react'
// import getNews from '../../../scripts/getNews'
import BackButton from './../../BackButton/BackButton';
import { Box, Container } from '@mui/material';
import NewsArticles from '../../EngineeringNews/News';
import axios from 'axios';


async function getArticle()
{

  axios.get('api/all_article_urls').then(urls => {
    console.log(urls)
    axios.get('api/reset_articles').then(res => {
      urls['data'].forEach(url => {
        axios.get('api/get_article', { params: { url: url }}).then(res => {
          console.log(JSON.stringify(res['data']));
        }).catch(err => {
          console.log(err);
        })
      })
    })
  })
  .catch(err => {
    console.log(err);
  })
  return await axios.get('api/get_article').then(res => (
    res
  )).catch(err => {
    console.log(err);
    return {"title": "What the frick is wrong"}
  }); 
}

function News() {
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticle().then(article => {
      console.log(article);
      // setArticle(article);
    });
  }, [])
  // 'https://samueli.ucla.edu/news-events/'
  return (
    <Container className='content' maxWidth='lg'>
      <BackButton />
      {article ? article['title'] : ''}

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