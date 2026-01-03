# React IG

## Description

React IG is a simple social media platform inspired by Instagram, built to demonstrate my progress in learning React, Redux, and MongoDB. Users can post photos, share and like friends' photos, and add comments. This project provided me with the opportunity to practice using React with Redux for state management and MongoDB for the database, applying CSS effectively across different components, and experimenting with React's routing and hooks.

## Important: Node.js Version Requirement

**This project requires Node.js version 20.x (LTS)**

The project dependencies are incompatible with Node.js 25+. To ensure compatibility:

1. Install NVM (Node Version Manager) if you haven't:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. The project includes `.nvmrc` files in both `backend/` and `frontend/` directories that specify Node 20.

3. When working on this project, simply run `nvm use` in either the backend or frontend directory, and it will automatically switch to Node 20.

**Why Node 20?**
Some dependencies (like `buffer-equal-constant-time` used by JWT libraries) are not compatible with Node.js 25+. Node 20 is the LTS (Long Term Support) version and provides the best stability for this project.

## Installation

**Prerequisites:**
- Node.js installed on your local machine.
- MongoDB account for database services.

**Steps:**
1. Clone the repository to your local machine: `git clone https://github.com/yourusername/React_IG.git`
2. Navigate to the project directory: `cd React_IG`
3. Install the dependencies for both frontend and backend:
   - For backend: `cd backend` then `npm install`
   - For frontend: `cd frontend` then `npm install`

## Setup

1. Create a `.env` file in the `backend` directory with the following content:
   ```
   PORT=3100
   DB_USER=<your_mongoDB_username>
   DB_PASS=<your_mongoDB_password>
   JWT_SECRET=<your_jwt_secret>
   ```
   Replace `<your_mongoDB_username>`, `<your_mongoDB_password>`, and `<your_jwt_secret>` with your actual MongoDB credentials and JWT secret.

2. MongoDB Setup: Follow the official MongoDB documentation to set up a new project and obtain your connection string (https://www.mongodb.com/docs/atlas/getting-started/).

## Usage

To run the application:

**Backend:**
```bash
cd backend
nvm use    # Automatically switches to Node 20
npm start
```

**Frontend (in a new terminal):**
```bash
cd frontend
nvm use    # Automatically switches to Node 20
npm start
```

## Technologies Used

- React for the frontend development.
- Redux for state management.
- MongoDB for the database.
- Express.js as the backend framework.
- Applied MVC (Model-View-Controller) architecture for backend API design.

## License

This project is open for use and modification. No formal license applied.


## Screenshots

![Login Page](/images/LoginHome.png)
![Home Page](/images/Home.png)
![Dashboard](/images/Dashboard.png)
![Edit Profile Page](/images/EditProfileData.png)
.
.
.
.
.
.
.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
