import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '350px', 
  borderRadius: 10,
  backgroundImage: "url(https://dinnerthendessert.com/wp-content/uploads/2015/08/Burger-B-Small-1.jpg)"
}

function MainButton({url, children}) {
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