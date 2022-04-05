import React from 'react';
import Articles from '../Articles.json';
import { Box, Button } from '@mui/material';
import './NewsArticle.css'


function NewsArticle({id}) {

  let article = Articles[id];
  return (
    <>
      <a id='ArticleButton' href={`article/${id}`}>
        <Button style={{height: '100%', width: '100%', textDecoration: 'none'}} className='profile-box'>
          <Box style={{"padding": "40px"}}>
            <h2>{article.title}</h2>
            {/* <h5>{date}</h5> */}
            <h4>{article.summary}</h4>
          </Box>
        </Button>
      </a>
    </>
  )
}

export default NewsArticle
