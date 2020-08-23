import React, { useState, useEffect } from 'react'
import './estilos.css'
import { useUsuario } from '../../context/user-context';

export default ({ showHideMenu }) => {
  const { user, setUser } = useUsuario();
  const [showMenu, setShowMenu] = useState(false);
  const [classHeader, setClassHeader] = useState('header');
  useEffect(() => {
    showMenu ? setClassHeader('header-responsive ') : setClassHeader('header')
  }, [showMenu]);

  const handleShowHide = () => {
    setShowMenu(!showMenu)
    showHideMenu(!showMenu)
  }  

  const logoutUser = () => {    
    setUser({status: 'success', error: null, user: null } );    
  }

  return (
    <header className={classHeader}>
      <span id="menu_on" onClick={handleShowHide} >
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span className="header-log" onClick={logoutUser}>Logout</span>
    </header>
  )
}