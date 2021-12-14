import React from 'react'


// Either link to the corresponding event or put all content on this website (not viable)

function Event({title, link, datetime}) {
  return (
    <div>
      <a href={link}>{title}</a>
      <h4>{datetime}</h4>
    </div>
  )
}

export default Event
