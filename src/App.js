import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="app-content">
        CONTENIDO
      </div>
    </div>
  );
}

export default App;
