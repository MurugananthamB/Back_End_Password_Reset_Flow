# Password Reset Flow (Backend)
## Description
This project is a backend API built with Node.js and Express, connected to MongoDB Atlas for database storage. 
It supports user authentication, including password reset functionality with email verification, and provides CRUD operations for managing user-related data.

## Features
- **User Authentication:** Secure login and registration with password hashing.
- **Password Reset:** Supports password reset via email with a time-limited reset link.
- **CRUD Operations:** Create, read, update, and delete resources.
- **Error Handling:** Proper error handling with descriptive responses.
- **MongoDB Atlas Integration:** Uses MongoDB Atlas as the cloud database. 

## Tech Stack
- **Node.js with Express -** for backend server and REST API creation.
- **MongoDB Atlas -** for cloud-based database.
- **Mongoose -** ODM library for MongoDB.
- **Nodemailer -** for sending password reset emails.
- **bcrypt -** for password hashing.
- **JWT (JSON Web Token) -** for user authentication and authorization.

## API Endpoints
### Register User

- URL: `/api/auth/register`
- Method: POST
- Description: Registers a new user with a hashed password. <br>
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "userpassword"
}
```

### Login User

- URL: `/api/auth/login`
- Method: POST
- Description: Logs in a user and returns a JWT token. <br>
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "userpassword"
}
```

 ### Reset Password

- URL: `/api/auth/resetPassword`
- Method: POST
- Description: Resets the password using a token from the reset link. <br>
**Request Body:**
```json
{
  "token": "resetToken",
  "email": "user@example.com",
  "newPassword": "newpassword"
}
```

## Security Considerations
- Passwords are hashed with bcrypt for secure storage.
- JWT tokens are used for user authentication.
- The password reset link includes an expiry to improve security.
## License
This project is licensed under the MIT License.
