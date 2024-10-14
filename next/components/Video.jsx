import React from 'react';
import { Box } from '@mui/material';

// Either do just pass in src='' or have to do copy the full embeded HTML code and pass in

// maybe do the react carousel thing with react-player

function Video({url}) {
    const videoId = url.split('v=')[1];
    return (
        <Box>
            <iframe
                width="800px"
                height="472.5px"
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
        </Box>
    );
}


export default Video
