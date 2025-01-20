import "./Home.css"

// Components
import LikeContainer from "../../components/LikeContainer"
import PhotoItem from "../../components/PhotoItem"
import { Link } from "react-router-dom"

// hooks
import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {useResetComponentMessage} from "../../hooks/useResetComponentMessage"

// Redux
import { getPhotos, like } from "../../slices/photoSlice"

const Home = () => {

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const {user} = useSelector((state) => state.auth)
  const {photos, loading} = useSelector((state) => state.photo)

  // Load all photos
  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  // Like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id))

    resetMessage()
  }

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div id="home">
      {photos && Array.isArray(photos) && photos.map((photo) => (
      <div key={photo._id}>
        <PhotoItem photo={photo} />
        <LikeContainer photo={photo} user={user} handleLike={handleLike} />
        <Link className="btn" to={`/photos/${photo._id}`} >View more</Link>
      </div>)
      )}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
          There are no pictures published yet, <Link to={`/users/${user._id}`} >Click here</Link>
        </h2>
      )}
    </div>
  )
}

export default Home