import React from 'react'

export default function CarouselItem({children}) {
    const carouselItemStyle = {
        maxHeight: "100%",
        maxWidth: "100%"
    }

  return (
    <div style={{display: "flex", alignItems: "center", height: "44vh"}}>
        {React.cloneElement(children, { style: carouselItemStyle })}
    </div>
  )
}
