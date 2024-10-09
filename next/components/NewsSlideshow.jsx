import React from 'react'
import Link from 'next/link'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import StudentsData from './People.json';
import Person from './Person';
import Video from './Video';

// sort by name

function NewsSlideshow() {
    
    return (
        <div style={{textAlign: 'center', maxHeight: '44vh'}}>
            <div style={{textAlign: 'left'}}>
            <Carousel
                width={"100%"}
                height={'44vh'}
                centerMode={true}
                transitionTime={700}
                centerSlidePercentage={55}
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                showThumbs={false}
                stopOnHover={true}
                >
                <Video url="https://www.youtube.com/watch?v=cxRDNjvUFXM" />
                <Video url="https://www.youtube.com/watch?v=g1e11lsrSvw" />
            </Carousel>
        </div>
    </div>
    )
}

export default NewsSlideshow;