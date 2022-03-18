import React from 'react'
import getNews from '../../../scripts/getNews'


function News() {
    getNews('https://samueli.ucla.edu/news-events/');
  return (
    <div>News</div>
  )
}

export default News