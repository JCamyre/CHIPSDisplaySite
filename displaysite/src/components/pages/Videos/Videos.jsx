import Video from '../../Video/Video';
import BackButton from '../../BackButton/BackButton';
import React from 'react'

function Videos() {
    return (
        <div className='content'>
            <BackButton />
            <h1>Videos: </h1>
            <Video url='https://www.youtube.com/watch?v=cxRDNjvUFXM' />
        </div>
    )
}

export default Videos