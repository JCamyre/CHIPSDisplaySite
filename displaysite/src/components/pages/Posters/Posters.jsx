import React from 'react'
import BackButton from './../../BackButton/BackButton';
import { Container, Box } from '@mui/material';
import { Document, Page, pdfjs } from "react-pdf";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import posters from '../../Posters.json';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Posters() {
  return (
    <Container className='content' maxWidth='lg'>
        <BackButton />
        <Box style={{justifyContent: 'center', backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)'}}>
          <h1>Posters:</h1>
          <Carousel width={'100%'} height={'50%'} centerMode={true} transitionTime={700} centerSlidePercentage={55} showIndicators={false} showStatus={false} infiniteLoop={true} showThumbs={false} stopOnHover={true} >
            {posters.map((poster, key) => (
              <a href={`poster/${key}`}>
                <div key={key}>
                  <Document onLoadError={console.error} file={`/posters/${poster['name']}`} error='Trying to find the poster, sorry!'>
                    <Page pageNumber={1} />
                  </Document>
                  <p className='legend'>{poster['name']}</p>
                </div>
              </a>
            ))}
            </Carousel> 
        </Box>

    </Container>
  )
}

export default Posters