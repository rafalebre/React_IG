import "./Photo.css"

import { getImageUrl } from "../../utils/config"

// components
import Message from "../../components/Message"
import Loading from "../../components/Loading"
import { Link } from "react-router-dom"
import PhotoItem from "../../components/PhotoItem"
import { BsTrash } from "react-icons/bs"

// hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

// Redux
import { getPhoto, like, unlike, comment, deleteComment } from "../../slices/photoSlice"
import LikeContainer from "../../components/LikeContainer"


const Photo = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state => state.photo))

  const [commentText, setCommentText] = useState("")

  // load photo data
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  // Insert a like
  const handleLike = () => {
    dispatch(like(photo._id))
    resetMessage()
  }

  // Insert an unlike
  const handleUnlike = () => {
    dispatch(unlike(photo._id))
    resetMessage()
  }

  // Insert a comment
  const handleComment = (e) => {
    e.preventDefault()

    const commentData = {
      comment: commentText,
      id: photo._id
    }
    dispatch(comment(commentData))

    setCommentText("")

    resetMessage()
  }

  // Delete a comment
  const handleDeleteComment = (commentId) => {
    const commentData = {
      photoId: photo._id,
      commentId
    }
    dispatch(deleteComment(commentData))
    resetMessage()
  }

  if (loading) {
    return <Loading />
  }


  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} handleUnlike={handleUnlike} />
      <div className="message-container">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comments: ({photo.comments.length}) </h3>

            <form onSubmit={handleComment} >
              <input type="text" placeholder="Insert your comment..." onChange={(e) => setCommentText(e.target.value)} value={commentText || ""} />
              <input type="submit" value="Send" />
            </form>
            {photo.comments.length === 0 && <p>There are no comments</p>}
            {photo.comments.map((comment) => (
              <div className="comment" key={comment.comment} >
                <div className="author">
                  {comment.userImage && (
                    <img src={getImageUrl(comment.userImage, 'users')} alt={comment.userName} />
                  )}
                  <Link to={`/users/${comment.userId}`} >
                    <p>{comment.userName}</p>
                  </Link>
                  {user && (user._id === comment.userId || user._id === photo.userId) && (
                    <BsTrash 
                      onClick={() => handleDeleteComment(comment._id)} 
                      style={{ cursor: 'pointer', marginLeft: '1em', color: '#999' }}
                      title="Delete comment"
                    />
                  )}
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Photo