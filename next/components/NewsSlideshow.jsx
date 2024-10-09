import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Image } from '@chakra-ui/react';
import CarouselItem from './CarouselItem';


export default function NewsSlideshow({carouselImages}) {

    console.log(carouselImages);
    
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
                {carouselImages && carouselImages.map((carouselImage) => (
                    <CarouselItem key={carouselImage.index} imageSrc={carouselImage.link}>
                        <Image src={carouselImage.link} />
                    </CarouselItem>
                ))}
            </Carousel>
        </div>
    </div>
    )
}

