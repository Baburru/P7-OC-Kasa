import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'

import data from '../../data.json'
import '../../styles/Home.css'

function Home() {
  console.log(data)
  return (
    <div className="HomeBody">
      <div className="HomeBanner">
        <div className="HomeBackground" />
        <h1 className="HomeH1">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="HomeMainBackground">
        {data.map((house, index) => (
          <HomeCard
            key={`${house.id}-${index}`}
            title={house.title}
            picture={house.cover}
            id={house.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
