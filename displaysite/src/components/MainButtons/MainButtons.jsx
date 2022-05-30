import React, { useEffect } from 'react'
import MainButton from '../MainButton/MainButton';
import { Link } from 'react-router-dom'
import './MainButtons.css'
import Articles from '../Articles.json';
import People from '../People/People.json';
import Videos from '../Videos.json';

// Fix so that height: '100%' actually stretches fits
const mainButtons = {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '99%',
    minWidth: '50%',
    display: 'grid',
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: 10,
    // gridAutoFlow: 'column'
};

function getRandomArticle()
{
  return Articles[Math.floor(Math.random() * Articles.length)];
}

function getRandomPerson()
{
  return People[Math.floor(Math.random() * People.length)];
}

const images = [
  {
    url: Articles[0]['image'],
    title: 'News',
    width: '40%',
  },
  {
    url: People[0]['img'],
    title: 'People',
    width: '40%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: 'Camera',
    width: '40%',
  },
  {
    url: `http://img.youtube.com/vi/${Videos[0]['url']}/hqdefault.jpg`,
    title: 'Videos',
    width: '40%'
  }
];
  
function MainButtons() {
  var article = '';
  var person = '';

  useEffect(() => {
    article = getRandomArticle();
    person = getRandomPerson();
  });

  return (
    // Make the div stretch to fit the entire page (besides the Navbar)
    <div style={mainButtons}>
      <MainButton url='news' img={article['image']}>
        News
      </MainButton>
      <MainButton url='people' img={person['img']}>
        People
      </MainButton>
      <MainButton url='posters'>
        Posters
      </MainButton>
      <MainButton url='videos'>
        Videos
      </MainButton>
    </div>
  )
}

export default MainButtons