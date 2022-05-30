import React from 'react';
import { Box } from '@mui/material';

// Either do just pass in src='' or have to do copy the full embeded HTML code and pass in

// maybe do the react carousel thing with react-player

function Video({url}) {
    return (
        <Box>
           <iframe width="800px" height="472.5" src={"https://www.youtube.com/embed/" + url.split('v=')[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </Box>
    )
}

export default Video
