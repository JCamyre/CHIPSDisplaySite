import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './NewsArticle.module.css'


function NewsArticle({id, article}) {

  return (
    <Box>
      <a id={styles.ArticleButton} href={`article/${id}`}>
        <Button style={{fontSize: '24px', height: '100%', width: '100%', textDecoration: 'none', borderRadius: 12}} className={styles.profile_box}>
          <Box style={{padding: "40px"}}>
            <h2>{article.title}</h2>
            <Box 
              component='img'
              src={article.img}
              style={{ borderRadius: '12px', marginTop: '20px', marginBottom: '20px', height: 450, width: 800 }}
            />
            <h3>{article.date}</h3>
            <i style={{fontWeight: 'bolder'}}>{`"${article.summary}..."`}</i>
          </Box>
        </Button>
      </a>
    </Box>
  )
}

export default NewsArticle
