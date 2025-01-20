# noteSphere

noteSphere is an advanced note-taking application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It includes secure login and signup functionality with JWT, and advanced security measures like hashing and salting.

## Table of Contents

- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Installation

### Backend

1. Clone the repository:

   ```sh
   git clone https://github.com/avinashsaroj01/noteSphere.git
   cd noteSphere/backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your environment variables:

   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:

   ```sh
   cd ../client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm start
   ```

## Features

- Secure login and signup with JWT
- Advanced security methods like hashing and salting
- Intuitive and user-friendly UI

## Usage

1. Make sure the backend server is running.
2. Start the frontend server as described above.
3. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- JWT for authentication
- Bcrypt for hashing and salting passwords

## Project Structure

```plaintext
noteSphere/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── config.js
│   └── package.json
└── client/
    ├── public/
    ├── src/
    ├── App.js
    └── package.json
```
