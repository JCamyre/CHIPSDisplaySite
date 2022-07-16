import React from 'react';
import { Link } from 'react-router-dom';

function MainButton({url, children, img}) {
  const buttonStyle = {
    color: '#ffffff',
    fontSize: '60px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '44vh', 
    borderRadius: 10,
    backgroundImage: "url(" + img + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    boxShadow: "4px 16px 16px -4px rgba(0, 0, 0, 0.25)",
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