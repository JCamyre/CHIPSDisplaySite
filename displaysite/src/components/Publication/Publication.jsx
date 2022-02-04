import React from 'react'
import './Publication.css';

// Could split up into contributors, link, and title, but too much work. API call will just send the entire thing
function Publication({information}) {
    return (
        <div id='publication-box' className='profile-box'>
            <span>
                {information}
            </span>
        </div>
    )
}

export default Publication
