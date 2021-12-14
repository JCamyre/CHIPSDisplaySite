import React from 'react';

function News({title, link, summary}) {
  return (
    <div>
      <h2><a href={link}>{title}</a></h2>
      <h4>{summary}</h4>
    </div>
  )
}

export default News
