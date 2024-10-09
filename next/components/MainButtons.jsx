import React, { useEffect, useState, useRef } from 'react'
import MainButton from './MainButton';
import People from './People.json';
import Posters from './Posters.json';
import Videos from './Videos.json';
import NewsSlideshow from './NewsSlideshow';

const mainButtons = {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    display: 'grid',
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: 10,
    // gridAutoFlow: 'column'
};

export async function getRandomPoster()
{
  return Posters[Math.floor(Math.random() * (Posters.length - 1))]
}

function MainButtons({ posterThumbnail, carouselImages }) {
  const [poster, setPoster] = useState('');

  useEffect(() => {
    setPoster(getRandomPoster());
  }, []);

  return (
    <div style={mainButtons}>
      <MainButton url='news' SlideShow={NewsSlideshow} carouselImages={carouselImages}>
        
      </MainButton>
      <MainButton url='people' img={"/images/subu.png"}>
        People
      </MainButton>
      <MainButton url='posters' img={`/poster_images/${posterThumbnail}`} fontColor={'black'}>
        
      </MainButton>
      <MainButton url='videos' img={`http://img.youtube.com/vi/${Videos[0]['url'].split('v=')[1]}/hqdefault.jpg`}>
        Videos
      </MainButton>
      <img src={'/images/qr-code.png'} style={{height: '150px', position: "absolute", bottom: 0, right: 0}} />
    </div>
  )
}

export default MainButtons

