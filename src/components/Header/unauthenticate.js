import React from 'react'
import './estilos.css'
import { Link } from 'react-router-dom'

export default () => (
  <header className="header-unauthenticate">
     <span className="header-log">
      <Link to="/login" > Login </Link>
     </span>

    <span className="header-log">
      <Link to="/register" > Registrarme </Link>
    </span>
    
  </header>
)