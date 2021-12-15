import React from 'react';
import './Event.css';


// Either link to the corresponding event or put all content on this website (not viable)

function Event({title, link, datetime}) {
  return (
    <div>
      <a href={link}>{title}</a>
      <small>{datetime}</small>
      <br />
    </div>
  )
}

export default Event
