import React from 'react'
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

const buttonStyle = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100%', 
  borderRadius: 10,
  backgroundImage: "url(https://dinnerthendessert.com/wp-content/uploads/2015/08/Burger-B-Small-1.jpg)"
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

  return (
    // Make the div stretch to fit the entire page (besides the Navbar)
    <div style={mainButtons}>
        <Link to='news'>
          <div style={buttonStyle}>
              <div>
                  yo
              </div>
          </div>
        </Link>
        <Link to='news'>
          <div style={buttonStyle}>
              <div>
                  yo
              </div>
          </div>
        </Link>
        <Link to='news'>
          <div style={buttonStyle}>
              <div>
                  yo
              </div>
          </div>
        </Link>
        <Link to='news'>
          <div style={buttonStyle}>
              <div>
                  yo
              </div>
          </div>
        </Link> 
      </div>
  )
}

export default MainButtons