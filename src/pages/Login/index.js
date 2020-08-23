import React from 'react'
import './estilos.css'

export default () => (
  <div className="content-login">
    <div className="form-login">
      <h2 className="form-title">Log in</h2>
      <form className="form">
        <div>
          <input type="text" placeholder="Email" className="input-login"></input>
          <span></span>
        </div>
        <div>
          <input type="text" placeholder="Password" className="input-login"></input>
          <span></span>
        </div>
        <div>
          <input type="submit" value="Log in" className="form-submit"></input>
        </div>
      </form>
    </div>
  </div>
)