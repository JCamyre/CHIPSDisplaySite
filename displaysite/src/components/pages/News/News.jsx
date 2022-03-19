import React from 'react'
// import getNews from '../../../scripts/getNews'
import BackButton from './../../BackButton/BackButton';


function News() {
  // 'https://samueli.ucla.edu/news-events/'
  return (
    <div className='content'>
      <BackButton />
      NEWS GOES HERE...
      {/* <embed src='https://www.ee.ucla.edu' style={{width: '500px', height: '300px'}} /> */}
    </div>
  )
}

export default News