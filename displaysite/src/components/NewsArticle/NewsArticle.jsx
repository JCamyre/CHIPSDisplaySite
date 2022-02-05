import React from 'react';

function NewsArticle({title, link, summary, date}) {
  return (
    <div style={{height: '100%', padding: '20px 20px 20px 20px'}} className='profile-box'>
      <h2><a href={link}>{title}</a></h2>
      <h5>{date}</h5>
      <h4>{summary}</h4>
    </div>
  )
}

export default NewsArticle
