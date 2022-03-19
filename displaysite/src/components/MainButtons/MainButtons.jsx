import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './MainButtons.css'

// Fix so that height: '100%' actually stretches fits
const mainButtons = {
    height: '100%',
    backgroundColor: '#eee'
};

// Do the div:nth-child(1) { paddingRight: '1%' } div:nth-child(2) { paddingLeft: '1%' }
const buttonStyle = {
  backgroundColor: '#fff', color: '#1f497d', fontSize: '48px', height: '95%', width: '45%'
};

// const [clicked, setClicked] = setState(false);
// <button onClick={() => setClicked(true)}
// 	className={clicked ? 'clicked' : ''}
// >
// </button>
	
// Issue with selecting Link elements from css, even if I make a class, only works if I do style={{}}
  
function MainButtons() {
  const [clicked, setClicked] = useState(false);
  return (
    // Make the div stretch to fit the entire page (besides the Navbar)
    <div style={mainButtons}>
      <div style={{height: '50%', display: 'block'}}>
        <Link style={{textDecoration: 'none'}} to='news'>
        <Button onClick={() => { setClicked(true) }} 
            className={clicked ? 'clicked' : ''}
            style={buttonStyle}>
                News
          </Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to='people'>
          <Button style={buttonStyle}>People</Button>
        </Link>
      </div>
      <div style={{height: '50%', display: 'block'}}>
        <Link style={{textDecoration: 'none'}} to='/posters'>
          <Button style={buttonStyle}>Posters</Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to='videos'>
          <Button style={buttonStyle}>Videos</Button>
        </Link>
      </div>
    </div>
  )
}

export default MainButtons