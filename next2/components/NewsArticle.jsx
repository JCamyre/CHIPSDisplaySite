import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './NewsArticle.module.css'


function NewsArticle({id, article}) {

  return (
    <Box>
      <a id={styles.ArticleButton} href={`article/${id}`}>
        <Button style={{height: '100%', width: '100%', textDecoration: 'none', borderRadius: 12}} className={styles.profile_box}>
          <Box style={{padding: "40px"}}>
            <h2>{article.title}</h2>
            <Box 
              component='img'
              src={article.img}
              style={{ borderRadius: '12px', marginTop: '20px', marginBottom: '20px' }}
            />
            <h4>{article.date}</h4>
            <h4>{article.summary}</h4>
          </Box>
        </Button>
      </a>
    </Box>
  )
}

export default NewsArticle
