import React from 'react'
import BackButton from './../../BackButton/BackButton';
import { Container, Box } from '@mui/material';
import { Document, Page, pdfjs } from "react-pdf";
import pdf from '../../../posters/instructions.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Posters() {
  return (
    <Container className='content' maxWidth='lg'>
        <BackButton />
        <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)'}}>
          <h1>INSERT POSTERS HERE</h1> 
          <h2>okay</h2>
          <Document onLoadError={console.error} file={pdf} error='Trying to find the poster, sorry!'>
            <Page pageNumber={1} />
          </Document> 
        </Box>

    </Container>
  )
}

export default Posters