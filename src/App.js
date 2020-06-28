import React from 'react';
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
  const { user } = useUsuario();
  return (    
    <div className="App">
      <Header />
      <Menu />
      <div className="app-content">
        CONTENIDO 
        { user.nombre }
      </div>
      <Footer />
    </div>    
  )
}

function App() {
  const { user } = useUsuario();
  return user ? <AuthenticateApp /> :  <UnauthenticateApp /> 
}

export default App;
