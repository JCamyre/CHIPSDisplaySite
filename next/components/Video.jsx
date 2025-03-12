import React from 'react';
import { Box } from '@mui/material';

// Either do just pass in src='' or have to do copy the full embeded HTML code and pass in

// maybe do the react carousel thing with react-player

function Video({url}) {
    // Extract the file ID from the Google Drive URL
    const fileId = url.match(/\/d\/([^\/]+)/)?.[1];
    
    if (!fileId) {
        return <Box>Invalid Google Drive URL</Box>;
    }
    
    return (
        <Box sx={{ width: "800px", height: "472.5px", position: "relative" }}>
            <iframe
                width="100%"
                height="100%"
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                title="Google Drive video player"
                frameBorder="0"
                scrolling="no"
                seamless=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
            <Box 
                sx={{ 
                    width: "80px", 
                    height: "80px", 
                    position: "absolute", 
                    opacity: 0, 
                    right: 0, 
                    top: 0,
                    zIndex: 1 
                }}
            />
        </Box>
    );
}

export default Video
