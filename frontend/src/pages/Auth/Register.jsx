import "./Auth.css";

// Components
import {Link} from "react-router-dom"

// Hooks
import { useState, useEffect } from "react";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Register to start interacting with other people.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm your password" />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already registered? <Link to="/login">Click here</Link>
      </p>
    </div>
  )
}

export default Register