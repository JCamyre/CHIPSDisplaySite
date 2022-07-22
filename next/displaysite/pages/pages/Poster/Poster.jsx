import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../../BackButton/BackButton';
import Posters from '../../Posters.json';
import { Box, Button, Container, Stack } from '@mui/material';
import { Document, Page, pdfjs } from "react-pdf";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




function Poster() {
    const [curPage, setCurPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    
    
    const { id } = useParams();
    console.log(id)

    function onDocumentLoadSuccess({numPages})
    {
        setNumPages(numPages);
        setCurPage(1);
    }

    function prevPage()
    {
        setCurPage((curPage + 1) % numPages);
    }

    function nextPage()
    {
        setCurPage((curPage - 1) % numPages);
    }

  return (
    <Container className='content' maxWidth='lg'>
        <BackButton path='/posters' />
        <Box style={{backgroundColor: '#fff', margin: 'auto', borderRadius: '10px', marginTop: '20px', padding: '20px', boxShadow: '0 10px 8px -4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center', justifyItems: 'center'}}>
        {(Posters.length > id) && 
        (
            <Container style={{paddingTop: '20px', width: 'fit-content'}}>
                <Document file={`/posters/${Posters[id]['name']}`} options={{ workerSrc: '/pdf.worker.js' }} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={curPage} height={1600} width={800} />
                </Document>
                <Stack>
                    <div>
                        <p>
                            Page {curPage || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button type='button' disabled={numPages <= 1} onClick={prevPage} style={{color: '#1f497d'}}>
                            Prev
                        </Button>
                        <Button type='button' disabled={curPage >= numPages} onClick={nextPage} style={{color: '#1f497d'}}>
                            Next    
                        </Button> 
                    </div>

                    <p className='legend' style={{textAlign: 'center'}}>{Posters[id]['name'].split('.pdf')}</p>
                </Stack>
            </Container>
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