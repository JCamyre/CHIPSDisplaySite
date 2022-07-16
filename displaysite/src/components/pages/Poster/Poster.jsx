import React from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../../BackButton/BackButton';
import Posters from '../../Posters.json';
import { Box, Button, Container } from '@mui/material';
import { Document, Page, pdfjs } from "react-pdf";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Poster() {
    const id = useParams();

  return (
    <Container className='content' maxWidth='lg'>
        <BackButton />
        <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center'}}>
        {(Posters.length > id) && 
        (
            <Box style={{paddingTop: '20px', width: '80%'}}>
                <Document file={Posters[id]['name']}>
                    <Page pageNumber={1} />
                </Document>
                <p className='legend'>{Posters[id]['name']}</p>
            </Box>
        )}
        {(Posters.length <= id) &&
        (
            <h1>
                Error! Article does not exist!
            </h1>
        )}
        </Box>
    </Container>
  )
}

export default Poster