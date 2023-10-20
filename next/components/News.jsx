import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';
import { Stack } from '@mui/material';

function News({ articles }) {

  return (
    <Stack alignItems='center' style={{paddingTop: '20px'}}>
        <h1 style={{color: '#1f497d'}}>UCLA Engineering News</h1>
        {articles && articles.map((article, key) => (
          <NewsArticle
            key={key}
            id={key}
            article={article}
          />
        ))}
    </Stack>
  )
}

export default News;

