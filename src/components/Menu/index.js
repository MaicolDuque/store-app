import React from 'react'
import { Link } from 'react-router-dom'
import './estilos.css'

export default ({ classMenu }) => (
  <div className={classMenu[0]}>
    <div className={classMenu[1]}>
      <h3>MENU</h3>
      <nav>
        <ul>
          <Link to="/" className="link">
            <li>Inicio</li>
          </Link>

          <Link to="/users" className="link">
            <li>Usuarios</li>
          </Link>
        </ul>
      </nav>

    </div>
  </div>
)