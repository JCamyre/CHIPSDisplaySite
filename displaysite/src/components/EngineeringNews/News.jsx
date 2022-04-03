import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import { Stack } from '@mui/material';
import Articles from '../Articles.json';

// Can do webscraping later

function News() {
  return (
    <Stack alignItems='center' justifyContents='center' style={{paddingTop: '20px'}}>
        <h1>UCLA Engineering News</h1>
        <NewsArticle
          id={0}
        />
        <NewsArticle
          id={1}
        />
        <NewsArticle
          id={2}
        />
    </Stack>
  )
}

export default News;
