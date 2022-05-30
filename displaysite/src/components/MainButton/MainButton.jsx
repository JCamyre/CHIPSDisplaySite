import React from 'react';
import { Link } from 'react-router-dom';



function MainButton({url, children, img, pdf=false}) {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '350px', 
    borderRadius: 10,
    backgroundImage: pdf ? img : "url(" + img + ")"
  }

  return (
    <Link to={url}>
      <div style={buttonStyle}>
          <div>
              {children}
          </div>
      </div>
    </Link>
  )
}

export default MainButton