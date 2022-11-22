import React from 'react'

import AboutDropdown from '../../components/dropdown/AboutDropdown'
import '../../styles/About.css'

import dropdowndata from '../../dropdown.json'

export default function About() {
  return (
    <div>
      <div className="AboutBanner">
        <div className="AboutBannerBackground"></div>
      </div>
      <div className="AboutMainContent">
        {dropdowndata.map((subject, index) => (
          <AboutDropdown
            key={index}
            title={subject.title}
            content={subject.content}
          />
        ))}
      </div>
    </div>
  )
}
