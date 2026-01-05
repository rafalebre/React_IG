import "./PhotoItem.css"

import { getImageUrl } from "../utils/config"

import { Link } from "react-router-dom"

const PhotoItem = ({photo}) => {
  return (
    <div className="photo-item">
        {photo.image && (
            <img src={getImageUrl(photo.image, 'photos')} alt={photo.title} />
        )}
        <h2>{photo.title}</h2>
        <p className="photo-author">
            Published by: <Link to={`/users/${photo.userId}`}> {photo.userName}</Link>
        </p>
    </div>
  )
}

export default PhotoItem