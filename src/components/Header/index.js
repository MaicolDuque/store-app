import React, { useState, useEffect } from 'react'
import './estilos.css'

export default ({ showHideMenu }) => {  
  const [ showMenu, setShowMenu ] = useState(false);
  const [ classHeader, setClassHeader ] = useState('header');
  useEffect( () => {
    showMenu ? setClassHeader('header-responsive ') : setClassHeader('header')
  }, [showMenu] );

  const handleShowHide = () => {
    setShowMenu(!showMenu)
    showHideMenu(!showMenu)
  }

  return (
    <header className={classHeader}>
      <span id="menu_on" onClick={handleShowHide} >
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span className="header-log">Logout</span>
    </header>
  )
}