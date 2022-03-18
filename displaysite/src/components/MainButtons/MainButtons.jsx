import React, { useState } from 'react'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

// Fix so that height: '100%' actually stretches fits
const mainButtons = {
    backgroundColor: 'green',
    height: '100%'
};

const buttonStyle = {
  fontSize: '48px', height: '50%', width: '50%', color: '#fff'
};

// const [clicked, setClicked] = setState(false);
// <button onClick={() => setClicked(true)}
// 	className={clicked ? 'clicked' : ''}
// >
// </button>
	
// I prob don't have to do anything about changing back to setClicked(false) since we should go to the page
// we want to by then

// Could do the time.timeout(2), then setClicked(false)
  
function MainButtons() {
  const [clicked, setClicked] = useState(false);
  return (
    // Make the div stretch to fit the entire page (besides the Navbar)
    <div style={mainButtons}>
      <Link to='people'>
      <Button onClick={() => { setClicked(true) }} 
          className={clicked ? 'clicked' : ''}
          style={buttonStyle}>
              News
        </Button>
      </Link>
      <Link to='people'>
        <Button style={buttonStyle}>People</Button>
      </Link>
        <Button style={buttonStyle}>Posters</Button>
      <Link to='videos'>
        <Button style={buttonStyle}>Videos</Button>
      </Link>
    </div>
  )
}

export default MainButtons