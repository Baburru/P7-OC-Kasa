import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Error.css'

export default function Error() {
  return (
    <div className="Error">
      <h1 className="ErrorH1">404</h1>
      <h2 className="ErrorH2">
        Oups ! La page que vous cherchez n'existe pas.
      </h2>
      <Link className="ErrorLink" to="/">
        Retourner à la page d'accueil
      </Link>
    </div>
  )
}
