import React from 'react'
import { useState } from 'react'

import arrow from '../../assets/arrow.svg'
import '../../styles/AboutDropdown.css'

// DD = DropDown

export default function AboutDropdown({ title, content, type }) {
  //Sate of the dropdown (open/close)
  const [isOpen, setIsOpen] = useState(false)

  if (type === undefined) {
    return isOpen ? (
      <div className="MainDropdown">
        <div className="DDHeader">
          <h2 className="DDTitle">{title}</h2>
          <button className="DDButton" onClick={() => setIsOpen(false)}>
            <img className="DDArrow" src={arrow} alt="arrow-button" />
          </button>
        </div>
        <p className="DDContent">{content}</p>
      </div>
    ) : (
      <div className="MainDropdown">
        <div className="DDHeader">
          <h2 className="DDTitle">{title}</h2>
          <button className="DDButton" onClick={() => setIsOpen(true)}>
            <img
              className="DDArrow"
              src={arrow}
              alt="arrow-button"
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
        </div>
      </div>
    )
  } else if (type === 'list') {
    return isOpen ? (
      <div className="MainDropdown">
        <div className="DDHeader">
          <h2 className="DDTitle">{title}</h2>
          <button className="DDButton" onClick={() => setIsOpen(false)}>
            <img className="DDArrow" src={arrow} alt="arrow-button" />
          </button>
        </div>
        <div className="DDContent">
          {content.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    ) : (
      <div className="MainDropdown">
        <div className="DDHeader">
          <h2 className="DDTitle">{title}</h2>
          <button className="DDButton" onClick={() => setIsOpen(true)}>
            <img
              className="DDArrow"
              src={arrow}
              alt="arrow-button"
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
        </div>
      </div>
    )
  }
}
