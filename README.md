# React_IG

A full-stack Instagram clone built with React, Redux, Node.js, Express, and MongoDB. This project was originally developed as part of a React course in 2024 and has been enhanced and deployed as a portfolio piece to demonstrate modern web development skills.

## 🚀 Live Demo

**Try it live:** [https://react-ig-nu.vercel.app](https://react-ig-nu.vercel.app)

*Note: First load may take ~1 minute due to free-tier cold start.*

## ✨ Features

- **User Authentication** - Secure registration and login with JWT
- **Photo Upload** - Upload images with permanent cloud storage (Cloudinary)
- **Social Interactions** - Like/unlike photos and add comments
- **User Profiles** - Customizable profiles with bio and profile pictures  
- **Photo Management** - Edit titles and delete your own photos
- **Search** - Find photos by title
- **Responsive Design** - Mobile-friendly interface

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Redux Toolkit for state management
- React Router for navigation
- Deployed on Vercel

**Backend:**
- Node.js 20 LTS with Express
- JWT authentication
- Multer for file uploads
- Deployed on Render

**Database & Storage:**
- MongoDB Atlas for data persistence
- Cloudinary for permanent image storage

## 📖 How to Use

1. Visit [https://react-ig-nu.vercel.app](https://react-ig-nu.vercel.app)
2. Register a new account (use any email format, no verification required)
3. Upload photos, like, and comment on posts
4. Edit your profile and customize your bio
5. Search for photos by title

## 🔧 Running Locally

### Prerequisites
- Node.js 20 LTS (managed via NVM - `.nvmrc` files included)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rafalebre/React_IG.git
cd React_IG
```

2. Install backend dependencies:
```bash
cd backend
nvm use  # Uses Node 20 from .nvmrc
npm install
```

3. Create backend `.env` file (see `backend/.env.example`):
```
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
JWT_SECRET=your_secret_key
PORT=3100
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

4. Start backend:
```bash
npm start
```

5. In a new terminal, install and start frontend:
```bash
cd frontend
nvm use  # Uses Node 20 from .nvmrc
npm install
npm start
```

Frontend runs on `http://localhost:3000`  
Backend runs on `http://localhost:3100`

## 📝 API Documentation

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/` - Update user profile
- `GET /api/users/:id` - Get user by ID

### Photos
- `POST /api/photos` - Upload new photo
- `GET /api/photos` - Get all photos (feed)
- `GET /api/photos/:id` - Get single photo
- `GET /api/photos/user/:id` - Get user's photos
- `PUT /api/photos/:id` - Update photo title
- `DELETE /api/photos/:id` - Delete photo
- `PUT /api/photos/like/:id` - Like a photo
- `PUT /api/photos/unlike/:id` - Unlike a photo
- `PUT /api/photos/comment/:id` - Add comment to photo
- `DELETE /api/photos/comment/:id/:commentId` - Delete comment
- `GET /api/photos/search?q=query` - Search photos by title

## 🎓 Project Background

This project was initially built as part of a comprehensive React course in 2024. It has since been significantly enhanced with:
- Cloud deployment on production-grade services
- Permanent image storage with Cloudinary (originally used temporary local storage)
- Delete comment functionality
- Improved UI/UX
- Professional deployment with CI/CD

The project serves as a portfolio demonstration of full-stack development capabilities, including modern React patterns, RESTful API design, authentication, file handling, and cloud service integration.

## 👤 Author

**Rafael Lebre**
- GitHub: [@rafalebre](https://github.com/rafalebre)

## 📄 License

This project is open source and available under the MIT License.
