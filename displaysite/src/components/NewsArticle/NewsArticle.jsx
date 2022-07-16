import React from 'react';
import Articles from '../Articles.json';
import { Box, Button } from '@mui/material';
import './NewsArticle.css'


function NewsArticle({id, article}) {

  console.log(id, article);
  return (
    <Box style={{borderRadius: '16px'}}>
      <a id='ArticleButton' href={`article/${id}`}>
        <Button style={{height: '100%', width: '100%', textDecoration: 'none'}} className='profile-box'>
          <Box style={{padding: "40px"}}>
            <h2>{article.title}</h2>
            <Box 
              component='img'
              src={article.img}
              style={{ borderRadius: '12px', marginTop: '20px', marginBottom: '20px' }}
            />
            <h5>{article.date}</h5>
            <h4>{article.summary}</h4>
          </Box>
        </Button>
      </a>
    </Box>
  )
}

export default NewsArticle
