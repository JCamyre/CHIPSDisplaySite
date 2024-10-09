import React from 'react'
import Link from 'next/link'

export default function CarouselItem({imageSrc, children}) {
    const carouselItemStyle = {
        maxHeight: "100%",
        maxWidth: "100%"
    }

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "44vh"}}>
      <Link href={`/image?src=${encodeURIComponent(imageSrc)}`}>
        <a style={carouselItemStyle}>
                {children}
            </a>
        </Link>
    </div>
  )
}
