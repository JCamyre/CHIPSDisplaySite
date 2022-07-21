import React, { useEffect, useState } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import { Stack } from '@mui/material';
import axios from 'axios';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('api/get_all_articles').then(res => {
      setArticles(res['data']);
      console.log("News.jsx: ", res);
    })
  }, []);

  return (
    <Stack alignItems='center' style={{paddingTop: '20px'}}>
        <h1>UCLA Engineering News</h1>
        {articles && articles.map((article, key) => (
          <NewsArticle
            id={key}
            article={article}
          />
        ))}
    </Stack>
  )
}

export default News;
