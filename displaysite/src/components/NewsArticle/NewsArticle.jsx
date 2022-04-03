import React from 'react';
import Articles from '../Articles.json';

function NewsArticle({id}) {

  let article = Articles[id];
  return (
    <div style={{height: '100%', padding: '20px 20px 20px 20px'}} className='profile-box'>
      <h2><a href={${'articles/{id}'}}>{article.title}</a></h2>
      {/* <h5>{date}</h5> */}
      <h4>{article.summary}</h4>
    </div>
  )
}

export default NewsArticle
