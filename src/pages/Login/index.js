import React, { useState } from 'react'
import './estilos.css'
import { useUsuario } from '../../context/user-context'

export default () => {
  const [ infoLogin, setInfoLogin ] = useState({ email: '', password: ''});
  const { login } = useUsuario();


  const handleSumbit = (e) => {
    e.preventDefault();
    login(infoLogin);
  }

  const handleChange = (e) => {
    setInfoLogin({
      ...infoLogin,
       [e.target.name]: e.target.value
    });
  }

  return (
    <div className="content-login" onSubmit={handleSumbit}>
      <div className="form-login">
        <h2 className="form-title">Log in</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} className="input-login"></input>
            <span></span>
          </div>
          <div>
            <input type="text" placeholder="Password" name="password" onChange={handleChange} className="input-login"></input>
            <span></span>
          </div>
          <div>
            <input type="submit" value="Log in" className="form-submit"></input>
          </div>
        </form>
      </div>
    </div>
  )
}