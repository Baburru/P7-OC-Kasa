import React from 'react'
import picture from '../../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'

export default function Header() {
  return (
    <div className="header">
      <Link className="LogoHeader" to="/">
        <img className="HeaderImg" src={picture} alt="kasa logo" />
      </Link>

      <nav>
        <Link className="HeaderLink" to="/">
          Accueil
        </Link>
        <Link className="HeaderLink" to="/about">
          A propos
        </Link>
      </nav>
    </div>
  )
}
