import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/HomeCard.css'

//HC = HomeCard

function HomeCard({ picture, title, id }) {
  function changePage() {
    window.location.href = `/sheet/${id}`
  }
  return (
    <div onClick={changePage} className="HCMainDiv">
      <div className="card-img-gradient">
        <img className="HCCardImg" alt="" src={picture} />
      </div>
      <h2 className="HCCardH2">{title}</h2>
    </div>
  )
}

HomeCard.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
}

HomeCard.defaultProps = {
  title: '',
  picture: '',
}

export default HomeCard
