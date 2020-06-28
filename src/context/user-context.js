import React, { useState, useEffect } from 'react';

const UsuarioContext = React.createContext();

const sleep = time => new Promise(resolve => setTimeout(resolve, time))
const getUser = () => sleep(1000)
    // .then(() => ({ nombre: 'Maicol Duque' }))
    .then(() => null)

function UsuarioProvider(props) {

  const [user, setstate] = useState({ nombre: '' });

  useEffect(() => {
    getUser()
    .then( user => setstate(user) )    
  }, [])

  return (
    <UsuarioContext.Provider value={{ user, setstate }} {...props} />
  )
}

const useUsuario = () => React.useContext(UsuarioContext);

export { UsuarioProvider, useUsuario }