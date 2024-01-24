import "./EditProfile.css";

const EditProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="edit-profile">
      <h2>Edit your data</h2>
      <p className="subtitle">Add a profile imange and tell a bit about yourself...</p>
      {/* preview da imagem */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" disabled />
        <label>
          <span>Profile Image:</span>
          <input type="file" />
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder="Profile description" />
        </label>
        <label>
          <span>Wanna change your password?</span>
          <input type="password" placeholder="Type your new password" />
        </label>
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default EditProfile