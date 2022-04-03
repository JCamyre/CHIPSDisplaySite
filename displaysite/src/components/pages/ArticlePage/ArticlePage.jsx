import React from 'react'
import { useParams } from 'react-router-dom';
import Articles from "../../Articles.json";
import { Container, Box } from "@mui/material";

// <div class='et_pb_text_inner'> To get main text from samueli.ucla.edu

function ArticlePage() {
    // get the params from the current path (which would be /article/:id). Ie /article/23, id = 23;
    let { id } = useParams();

    console.log(Articles.length);

  return (
    <Container className='content' maxWidth='lg'>
        <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgb(142, 215, 240)'}}>
        {(Articles.length > id) && 
        (
            <>
                <h1>
                    {Articles[id].title}
                </h1>
                <img src={Articles[id].image} alt='Article Thumbnail' />
                <h3>{Articles[id].summary}</h3>
            </>
        )}
        {(Articles.length <= id) &&
        (
            <h1>
                Error! Article does not exist!
            </h1>
        )}
        </Box>
    </Container>
  )
}

export default ArticlePage