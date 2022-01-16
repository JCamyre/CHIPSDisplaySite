import React from 'react'

// Either do just pass in src='' or have to do copy the full embeded HTML code and pass in

function Video({url}) {
    return (
        <div>
           <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + url.split('v=')[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
    )
}

export default Video
