import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import UnauthenticateHeader from './components/Header/unauthenticate';
import Menu from './components/Menu';
import Footer from './components/footer'
import { useUsuario } from './context/user-context'
import Home from './pages/home';
import Users from './pages/users';

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
  const [ classApp, setClassApp ] = useState('app-responsive');
  const [ classMenu, setClassMenu ] = useState({0: 'menu fade', 1: 'hide-menu'});
  const showHideMenu = (show) => { 
    if(show){
      setClassApp('App');
      setClassMenu({0: 'menu fade show', 1: 'content-menu'});
    }else{
      setClassApp('app-responsive');
      setClassMenu({0: 'menu fade', 1: 'hide-menu'});      
    }    
  }  

  return ( 
    <div className={classApp}>
      <Header showHideMenu={showHideMenu} />
      <Menu classMenu={classMenu} />
      <div className="app-content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </BrowserRouter>
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
