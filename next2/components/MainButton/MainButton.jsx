import React from 'react';
import Link from 'next/link'

function MainButton({url='/', children, img, pdf=false, ...args}) {
  const buttonStyle = {
    color: pdf ? '#000000' : '#ffffff',
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
    ...args
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