import React from 'react';
import Link from 'next/link'

function MainButton({url='/', children, img, pdf=false, fontColor='white', ...args}) {
  const buttonStyle = {
    color: fontColor,
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
    <Link href={url}>
      <div style={buttonStyle}>
          <div>
              {children}
          </div>
      </div>
    </Link>
  )
}

export default MainButton