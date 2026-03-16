# Built Entirely from New Source Code

This project is implemented from scratch (no template cloning), focused on a JWT-based authentication flow using Node.js, Express, and MongoDB.

## Overview

This repository currently contains two parts:

- `jwt-auth-backend`: active and runnable backend code.
- `jwt-auth-frontend`: placeholder stage (main application code not added yet).

## Important Updates in the New Codebase

- System modularization: the backend is organized by clear modules (`config`, `controllers`, `services`, `routes`, `models`, `middlewares`, `validators`, `utils`) to improve scalability and maintainability.
- Error-handling module enhancements: centralized error processing with middleware + async wrapper pattern to reduce repetitive `try/catch` blocks in controllers.
- Revoke token mechanism update: token lifecycle now includes explicit revoke support to invalidate issued refresh tokens on logout/security events.
- Refresh token hashing update: refresh tokens are stored and validated in hashed form to reduce risk if database data is exposed.

## Tech Stack

- Node.js (ES Modules)
- Express.js
- MongoDB + Mongoose
- express-validator
- bcrypt
- dotenv

## Project Structure

```text
Authentication_System/
|- jwt-auth-backend/
|  |- src/
|  |  |- config/
|  |  |- controllers/
|  |  |- middlewares/
|  |  |- models/
|  |  |- routes/
|  |  |- services/
|  |  |- validators/
|  |  |- utils/
|  |  |- app.js
|  |  |- server.js
|  |- .env
|  |- package.json
|- jwt-auth-frontend/
|- README.md
```

## Current Backend Features

- Health check endpoint.
- User registration with input validation.
- User login with email or username.
- Password hashing before database persistence.

## Current API

Base URL (local): `http://localhost:5000`

1. `GET /health`
- Description: checks if the server is running.

2. `POST /api/auth/register`
- Description: creates a new user account.
- Example body:

```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "12345678",
  "avatar": "https://example.com/avatar.png",
  "bio": "Hello"
}
```

3. `POST /api/auth/login`
- Description: signs in using `identifier` (email or username) and `password`.
- Example body:

```json
{
  "identifier": "john@example.com",
  "password": "12345678"
}
```

## Local Setup

1. Go to backend folder:

```bash
cd jwt-auth-backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure `.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_system
ACCESS_TOKEN_SECRET=your_super_secure_access_secret
REFRESH_TOKEN_SECRET=your_super_secure_refresh_secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
```

4. Run in development:

```bash
npm run dev
```

5. Run in production mode:

```bash
npm start
```

## Next Steps

- Complete access/refresh JWT flow in all auth endpoints.
- Add logout, refresh token rotation, and profile APIs.
- Complete frontend implementation and end-to-end integration.
- Add tests for service and controller layers.

## Note

This README file has been updated to reflect the latest project direction and significant architectural/security upgrades.

The old source code has been completely removed; please wait for the author to complete the new source code.
