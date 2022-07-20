import React, { useEffect } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import { Stack } from '@mui/material';
import Articles from '../Articles.json';

function News() {

  return (
    <Stack alignItems='center' style={{paddingTop: '20px'}}>
        <h1>UCLA Engineering News</h1>
        {Articles.map((article, key) => (
          <NewsArticle
          id={key}
          article={article}
        />
        ))}
    </Stack>
  )
}

export default News;
