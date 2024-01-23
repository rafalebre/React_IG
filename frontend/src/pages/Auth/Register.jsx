import "./Auth.css";

// Components
import { Link } from "react-router-dom"
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";

// Redux
import { register, reset } from "../../slices/authSlice"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user);

    dispatch(register(user))
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Register to start interacting with other people.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name || ""} />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""} />
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword || ""} />
        {!loading && <input
          type="submit"
          value="Register" />}
        {loading && <input
          type="submit"
          value="Wait..." disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Already registered? <Link to="/login">Click here</Link>
      </p>
    </div>
  )
}

export default Register