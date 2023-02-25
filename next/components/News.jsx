import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';
import { Stack } from '@mui/material';
import axios from 'axios';
import Articles from './Articles.json';

function News({ articles }) {

  return (
    <Stack alignItems='center' style={{paddingTop: '20px'}}>
        <h1 style={{color: '#1f497d'}}>UCLA Engineering News</h1>
        {Articles && Articles.map((article, key) => (
          <NewsArticle
            id={key}
            article={article}
          />
        ))}
    </Stack>
  )
}

export default News;

export const getStaticProps = async() => {
  const articles = await axios.get('/api/get_all_articles').then(res => {
    console.log('yo')
    return res;
  })

  // reference .json for getStaticProps?

  return {
    props: {
      articles,
    },
    revalidate: 4000,
  }
}