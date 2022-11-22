import React from 'react'

export default function SlideCard(pic) {
  return (
    <img className="carousel-img" key={pic.index} src={pic.pic} alt="abcd" />
  )
}
