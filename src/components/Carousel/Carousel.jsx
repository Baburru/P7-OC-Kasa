import React from 'react'
import '../../styles/Carousel.css'
import { useState } from 'react'

const Carousel = (picList) => {
  const [current, setCurrent] = useState(0)
  const length = picList.picList.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    console.log(current)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current)
  }

  if (length > 1) {
    return (
      <div className="product-carousel">
        <button className="next-btn" onClick={nextSlide}>
          <p>&lt;</p>
        </button>
        <button className="pre-btn" onClick={prevSlide}>
          <p>&gt;</p>
        </button>

        {picList.picList.map((pic, index) => {
          return (
            <div className="item-carousel" key={index}>
              {index === current && (
                <img className="carousel-img" src={pic} alt="" />
              )}
            </div>
          )
        })}
      </div>
    )
  } else {
    console.log(picList.picList)
    return (
      <div className="item-carousel">
        <img className="carou-img" src={picList.picList} alt="" />
      </div>
    )
  }
}

export default Carousel
