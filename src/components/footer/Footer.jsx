import React from 'react'
import logo from '../../assets/LOGO.svg'
import '../../styles/Footer.css'

export default function Footer() {
  return (
    <footer>
      <img className="FooterImg" src={logo} alt="kasa logo" />
      <h3 className="FooterText">@ 2020 Kasa, All right reserved</h3>
    </footer>
  )
}
