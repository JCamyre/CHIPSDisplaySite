import React from 'react'
import BackButton from './../../BackButton/BackButton';
import { Container, Box } from '@mui/material';
import { Document, Page, pdfjs } from "react-pdf";
import pdf1 from '../../../posters/instructions.pdf';
import pdf2 from '../../../posters/Joseph_S_Camyre_Resume.docx.pdf';
import pdf3 from '../../../posters/Joseph_S_Camyre_Resume.pdf';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Posters() {
  return (
    <Container className='content' maxWidth='lg'>
        <BackButton />
        <Box style={{justiyContent: 'center', backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)'}}>
          <h1>Posters:</h1>
          <Carousel width={'100%'} height={'50%'} centerMode={true} transitionTime={700} centerSlidePercentage={55} showIndicators={false} showStatus={false} infiniteLoop={true} showThumbs={false} stopOnHover={true} >
            <div>
              <Document onLoadError={console.error} file={pdf1} error='Trying to find the poster, sorry!'>
                <Page pageNumber={1} />
              </Document>
              <p className='legend'>PDF #1</p>
            </div>
            <div>
              <Document onLoadError={console.error} file={pdf2} error='Trying to find the poster, sorry!'>
                <Page pageNumber={1} />
              </Document>
              <p className='legend'>PDF #2</p>
            </div>        
            <div>
              <Document onLoadError={console.error} file={pdf3} error='Trying to find the poster, sorry!'>
                <Page pageNumber={1} />
              </Document>
              <p className='legend'>PDF #3</p>
            </div>    
          </Carousel> 
        </Box>

    </Container>
  )
}

export default Posters