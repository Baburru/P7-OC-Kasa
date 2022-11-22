import React from 'react'
import { useParams } from 'react-router-dom'
import AboutDropdown from '../../components/dropdown/AboutDropdown'
import '../../styles/HouseSheet.css'

import data from '../../data.json'
import Carousel from '../../components/Carousel/Carousel'

export default function HouseSheet() {
  const account = useParams().id

  const obj = data.find((c) => c.id === account)
  const tagList = obj.tags

  const ratingNb = parseInt(obj.rating)

  const list = []

  for (let i = 0; i < ratingNb; i++) {
    list.push(
      <div key={i}>
        <i className="fa-solid fa-star"></i>
      </div>
    )
  }
  while (list.length < 5) {
    list.push(
      <div key={list.length}>
        <i className="fa-regular fa-star"></i>
      </div>
    )
  }

  const myArray = obj.host.name.split(' ')
  console.log(myArray)

  return (
    <div>
      <div className="carousel">
        <Carousel picList={obj.pictures} />
      </div>
      <div>
        <div className="info-header">
          <div className="left-content">
            <h1 className="hs-h1">{obj.title}</h1>
            <h2 className="hs-h2">{obj.location}</h2>
            <div className="tag-container">
              {tagList.map((tag) => (
                <p className="tag" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="right-content">
            <div className="host-infos">
              <div className="host-name-container">
                {myArray.map((nom) => (
                  <p key={nom} className="host-name">
                    {nom}
                  </p>
                ))}
              </div>
              <img className="host-img" src={obj.host.picture} alt="host PP" />
            </div>
            <div className="rating">{list}</div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <AboutDropdown
          className="DropDown"
          title="Description"
          content={obj.description}
        />
        <AboutDropdown
          className="DropDown"
          title="Equipements"
          type="list"
          content={obj.equipments}
        />
      </div>
    </div>
  )
}
