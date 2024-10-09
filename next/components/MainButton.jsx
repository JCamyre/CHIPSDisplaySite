import React from 'react';
import Link from 'next/link'

function MainButton({url='/', children, img, pdf=false, fontColor='white', SlideShow=null, ...args}) {
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

  console.log(SlideShow)

  return (
    <Link href={url}>
    {SlideShow === null ? (
      <div style={buttonStyle}>
          <div>
              {children}
          </div>
      </div>
    ) : (
      <div>
        <p>yo</p>
        <SlideShow />
      </div>
    )}
    </Link>
  )
}

export default MainButton