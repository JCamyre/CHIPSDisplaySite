import React, { useEffect, useState, useRef } from 'react'
import MainButton from './MainButton';
import Articles from './Articles.json';
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

export async function getRandomArticle()
{
  if (Articles)
    return Articles[Math.floor(Math.random() * (Articles.length - 1))];
  else
    return {}
}

export async function getRandomPoster()
{
  return Posters[Math.floor(Math.random() * (Posters.length - 1))]
}

function MainButtons({ posterThumbnail }) {
  const [poster, setPoster] = useState('');

  useEffect(() => {
    // once article/person updates, state changes, MainButton associated with state, rerenders component
    setPoster(getRandomPoster());
  }, []);

  //  slideShow={NewsSlideshow}
  return (
    <div style={mainButtons}>
      <MainButton url='news' img={'https://www.chips.ucla.edu/images/CHIPS-white-logo.png'}>
        News
      </MainButton>
      <MainButton url='people' img={"/images/subu.png"}>
        People
      </MainButton>
      <MainButton url='posters' img={`/poster_images/${posterThumbnail}`} fontColor={'black'}>
        Posters
      </MainButton>
      <MainButton url='videos' img={`http://img.youtube.com/vi/${Videos[0]['url'].split('v=')[1]}/hqdefault.jpg`}>
        Videos
      </MainButton>
    </div>
  )
}

export default MainButtons

