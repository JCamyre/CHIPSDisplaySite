import React from 'react'
import Link from 'next/link'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Image } from '@chakra-ui/react';
import CarouselItem from './CarouselItem';

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
                <CarouselItem imageSrc="https://s3.us-west-1.amazonaws.com/chips.user.media/images/index/2024%20CHIMES%20Annual%20Review.jpg">
                    <Image src="https://s3.us-west-1.amazonaws.com/chips.user.media/images/index/2024%20CHIMES%20Annual%20Review.jpg" />
                </CarouselItem>
                <CarouselItem imageSrc="https://s3.us-west-1.amazonaws.com/chips.user.media/images/index/1723658111210-9b03a8e5-e71f-4c32-82ce-78191d5cda69017%20Theme%20III%20Vineeth%20Harish%20poster%20%282%29_1.jpg">
                    <Image src="https://s3.us-west-1.amazonaws.com/chips.user.media/images/index/1723658111210-9b03a8e5-e71f-4c32-82ce-78191d5cda69017%20Theme%20III%20Vineeth%20Harish%20poster%20%282%29_1.jpg" />
                </CarouselItem>
            </Carousel>
        </div>
    </div>
    )
}

export default NewsSlideshow;