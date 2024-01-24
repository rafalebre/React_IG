import "./EditProfile.css";

import { uploads } from "../../utils/config";

// Hooks
import { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";

// Redux
import { profile, resetMessage } from "../../slices/userSlice"

//Components
import Message from "../../components/Message"

const EditProfile = () => {
  const dispatch = useDispatch()

  const { user, message, error, loading } = useSelector((state) => state.user)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [bio, setBio] = useState("")
  const [previewImage, setPreviewImage] = useState("")

  // Load user data
  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  // Fill form with user data
  useEffect(() => {

    if(user) {
      setName(user.name)
      setEmail(user.email)
      setBio(user.bio)
    }

  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="edit-profile">
      <h2>Edit your data</h2>
      <p className="subtitle">Add a profile imange and tell a bit about yourself...</p>
      {/* preview da imagem */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name || ""} />
        <input type="email" placeholder="E-mail" disabled value={email || ""}/>
        <label>
          <span>Profile Image:</span>
          <input type="file" />
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder="Profile description" onChange={(e) => setBio(e.target.value)} value={bio || ""} />
        </label>
        <label>
          <span>Wanna change your password?</span>
          <input type="password" placeholder="Type your new password" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
        </label>
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default EditProfile