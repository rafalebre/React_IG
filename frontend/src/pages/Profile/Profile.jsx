import "./Profile.css"

import {uploads} from "../../utils/config"

// components
import Message from "../../components/Message"
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs"

// Hooks
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// Redux
import { getUserDetails } from "../../slices/userSlice"

const Profile = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  const {user, loading} = useSelector((state) => state.user)
  const {user: userAuth} = useSelector((state) => state.auth)

  // New form and edit form refs
  const newPhotoForm = useRef()
  const editPhotoForm = useRef()

  // Load user data
  useEffect(() => {

      dispatch(getUserDetails(id))

  }, [dispatch, id])

  const submitHandle = (e) => {
    e.preventDefault()
  }

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div id="profile">
      <div className="profile-header">
        {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )}
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      {id === userAuth._id && (
        <>
          <div className="new-photo" ref={newPhotoForm}>
            <h3>Share something:</h3>
            <form onSubmit={submitHandle}>
            <label>
              <span>Title for the picture:</span>
              <input type="text" placeholder="Insert a title" />
            </label>
            <label>
              <span>Image:</span>
              <input type="file" />
            </label>
            <input type="submit" value="Post" />
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile