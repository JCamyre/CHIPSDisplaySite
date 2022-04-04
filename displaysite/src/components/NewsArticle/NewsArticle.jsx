import React from 'react';
import Articles from '../Articles.json';
import { Box } from '@mui/material';
import './NewsArticle.css'

function NewsArticle({id}) {

  let article = Articles[id];
  return (
    <>
      <a id='ArticleButton' href={`article/${id}`}>
        <Box style={{height: '100%', padding: '20px'}} className='profile-box'>
          <h2>{article.title}</h2>
          {/* <h5>{date}</h5> */}
          <h4>{article.summary}</h4>
        </Box>
      </a>
    </>
  )
}

export default NewsArticle
