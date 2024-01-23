import "./Auth.css"

// Components
import { Link } from "react-router-dom"
import Message from "../../components/Message"

// Hooks
import { useEffect, useState } from "react"
import { UseSelector, useDispatch } from "react-redux"

// Redux


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Login to check what's new.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
        <input type="submit" value="Login" />
      </form>
      <p>Not registered yet? <Link to="/register">Click here</Link></p>
    </div>
  )
}

export default Login