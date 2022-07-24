import React, { useEffect, useState } from 'react'
import { pdfjs } from "react-pdf";
import MainButton from './MainButton';
import Articles from './Articles.json';
import People from './People/People.json';
import Posters from './Posters.json';
import Videos from './Videos.json';
import image from '../public/poster_images/2021 CHIPS WorkShip Poster_KuanNeng Chen1024_1.jpg';

const mainButtons = {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    minWidth: '50%',
    display: 'grid',
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: 10,
    // gridAutoFlow: 'column'
};

function getRandomArticle()
{
  return Articles[Math.floor(Math.random() * (Articles.length - 1))];
}

function getRandomPerson()
{
  return People[Math.floor(Math.random() * (People.length - 1))];
}

function getRandomPoster()
{
  return Posters[Math.floor(Math.random() * (Posters.length - 1))]
}

function MainButtons() {
  const [article, setArticle] = useState('');
  const [person, setPerson] = useState('');
  const [poster, setPoster] = useState('');

  useEffect(() => {
    // once article/person updates, state changes, MainButton associated with state, rerenders component
    setArticle(getRandomArticle());
    setPerson(getRandomPerson());
    setPoster(getRandomPoster());
  }, []); // infinite updates cause once this gets updated, useEffect called again?

  return (
    <div style={mainButtons}>
      <MainButton url='news' img={article ? article['img'] : 'https://www.chips.ucla.edu/images/CHIPS-white-logo.png'}>
        News
      </MainButton>
      <MainButton url='people' img={person['img']}>
        People
      </MainButton>
      <MainButton url='posters' img={'/public/poster_images/2021 CHIPS WorkShip Poster_KuanNeng Chen1024_1.jpg'} style={{color: 'black'}}>
        Posters
      </MainButton>
      <MainButton url='videos' img={`http://img.youtube.com/vi/${Videos[0]['url'].split('v=')[1]}/hqdefault.jpg`}>
        Videos
      </MainButton>
    </div>
  )
}

export default MainButtons