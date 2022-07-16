import React, { useEffect } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import { Stack } from '@mui/material';
// import { writeJsonFile } from 'write-json-file';
import Articles from '../Articles.json';
import axios from 'axios';

// Can do webscraping later
// Having the revalidate would be very nice here
async function getNews(url)
{
  const request = await axios.get('localhost:8000/webscraper', {
    params: {
      url: url
    }
  });
  // await writeJsonFile('./test/fixtures/orgResponse.json', orgResponse);

  return request;
}

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
