import React from 'react';
import './Event.css';


// Either link to the corresponding event or put all content on this website (not viable)

function Event({title, link, datetime}) {
  return (
    <div className='profile-box' id='event-box'>
      <a>{title}</a>
      <br/>
      <small>{datetime}</small>
    </div>
  )
}

export default Event
