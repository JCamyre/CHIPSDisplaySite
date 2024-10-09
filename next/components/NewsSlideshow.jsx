import React from 'react'
import Link from 'next/link'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Image } from '@chakra-ui/react';
import CarouselItem from './CarouselItem';
import { useEffect, useState } from 'react';


export default function NewsSlideshow() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
      fetch('/api/slides')
        .then((res) => res.json())
        .then((data) => setSlides(data))
        .catch((error) => console.error('Error fetching slides:', error));
    }, []);
    
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
                {slides.map((slide) => (
                    <CarouselItem imageSrc={slide.link}>
                        <Image src={slide.link} />
                    </CarouselItem>
                ))}
            </Carousel>
        </div>
    </div>
    )
}

