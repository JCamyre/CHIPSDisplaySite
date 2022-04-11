import React from 'react'
import MainButton from '../MainButton/MainButton';
import { Link } from 'react-router-dom'
import './MainButtons.css'
import Articles from '../Articles.json';
import People from '../People/People.json';
import Videos from '../Videos.json';

// Fix so that height: '100%' actually stretches fits
const mainButtons = {
    height: '100%',
    minWidth: '25%'
};

// Do the div:nth-child(1) { paddingRight: '1%' } div:nth-child(2) { paddingLeft: '1%' }
const buttonStyle = {
  backgroundColor: '#fff', color: '#1f497d', fontSize: '48px', height: '95%', width: '48%'
};

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

  return (
    // Make the div stretch to fit the entire page (besides the Navbar)
    <div style={mainButtons}>
      <div style={{height: '50%', display: 'block'}}>
        <Link style={{textDecoration: 'none'}} to='news'>
          <MainButton image={images[0]} style={buttonStyle} />
        </Link>
        <Link style={{textDecoration: 'none'}} to='people'>
          <MainButton image={images[1]} style={buttonStyle} />
        </Link>
      </div>
      <div style={{height: '50%', display: 'block'}}>
        <Link style={{textDecoration: 'none'}} to='posters'>
          <MainButton image={images[2]} style={buttonStyle} />
        </Link>
        <Link style={{textDecoration: 'none'}} to='videos'>
          <MainButton image={images[3]} style={buttonStyle} />
        </Link>
      </div>
    </div>
  )
}

export default MainButtons