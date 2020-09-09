import React, { useState } from 'react';

import { LoginService } from '../services/user';
import Spinner from '../components/Spinner';

const UsuarioContext = React.createContext();

function UsuarioProvider({ children }) {

  const [token, setToken] = useState(
    () => window.sessionStorage.getItem('token')
  )
  
  const [user, setUser] = useState({
    status: 'success',
    error: null,
    user: token,
  });

 

  const login = async ({ email, password }) => {
    setUser({ ...user, status: 'pending' })
    try {
      const res   = await LoginService(email, password);
      const json  = await res.json();
      if (!res.ok) return setUser({ status: 'error', error: { message: json.message } })
      setUser({ status: 'success', error: null, user: json });
      setToken(json.token);
      window.sessionStorage.setItem('token', json.token);
    } catch (error) {
      window.sessionStorage.removeItem('jwt')
      setUser({ user: null, status: 'error', error: { message: error.toString() } })
    }
  }

  const register = () => { } // register the user

  const logout = () => { 
    window.sessionStorage.removeItem('token');
    setToken(null);
    setUser({ status: 'success', error: null, user: null, });
  }

  return (
    <UsuarioContext.Provider value={{ 
      token: Boolean(token), 
      login, 
      logout,
      user, 
      setUser 
    }}  >
      { token ? (
        children
      ): user.status === 'pending' ? (
        <Spinner />
      ) : user.status === 'error' ? (
        <div>
          Oh no
          <div>
            <pre>{user.error.message}</pre>
          </div>
        </div>
      ) : null }
      
    </UsuarioContext.Provider>
  )
}

const useUsuario = () => React.useContext(UsuarioContext);

export { UsuarioProvider, useUsuario }