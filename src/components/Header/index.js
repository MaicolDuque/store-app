import React, { useState, useEffect } from 'react'
import './estilos.css'

export default ({ showHideMenu }) => {  
  const [ showMenu, setShowMenu ] = useState(true);
  const [ classHeader, setClassHeader ] = useState('header');
  useEffect( () => {
    showMenu ? setClassHeader('header') : setClassHeader('header-responsive')
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