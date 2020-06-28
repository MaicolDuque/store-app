import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import UnauthenticateHeader from './components/Header/unauthenticate';
import Menu from './components/Menu';
import Footer from './components/footer'
import { useUsuario } from './context/user-context'

function UnauthenticateApp() {
  return (
    <div className="App-unauthenticate">
      <UnauthenticateHeader />
      <p>Please Login!</p>
      <Footer />
    </div> 
  )
}

function AuthenticateApp() {
  const { user: { user } } = useUsuario();
  const [ classApp, setClassApp ] = useState('App');
  const [ classMenu, setClassMenu ] = useState('content-menu');
  const [ widthScreen, setWidthScreen] = useState(window.screen.width);
  const showHideMenu = (show) => { 
    if(show){
      setClassApp('App');
      setClassMenu('content-menu');
    }else{
      setClassApp('app-responsive');
      setClassMenu('hide-menu');
    }    
  }

  useEffect(() => {
    console.log(widthScreen)
    setWidthScreen(window.screen.width)
    if(widthScreen < 800){
      showHideMenu(false);
    }
  }, [widthScreen])
  

  return (    
    <div className={classApp}>
      <Header showHideMenu={showHideMenu} />
      <Menu classMenu={classMenu} />
      <div className="app-content">
        CONTENIDO 
        { user.nombre }
      </div>
      <Footer />
    </div>    
  )
}

function App() {
  const { user: { user } } = useUsuario();    
  return user ? <AuthenticateApp /> :  <UnauthenticateApp /> 
}

export default App;
