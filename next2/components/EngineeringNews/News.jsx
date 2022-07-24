import React, { useEffect, useState } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import { Stack } from '@mui/material';
import axios from 'axios';
import Articles from '../Articles.json';

function News() {


  return (
    <Stack alignItems='center' style={{paddingTop: '20px'}}>
        <h1>UCLA Engineering News</h1>
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

// export const getStaticProps = async() => {
//   const articles = await axios.get('api/get_all_articles').then(res => {
//     writeJsonFile('../Articles.json', res['data']);

//     return res['data'];
//   })

//   return {
//     props: {
//       articles,
//     },
//     revalidate: 400,
//   }
// }