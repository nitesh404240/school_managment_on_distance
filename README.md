School Management API

A RESTful API built using Node.js, Express.js, and MySQL to manage school data.

The system allows users to:

Add new schools
Fetch schools sorted by proximity based on user location coordinates
Features
Add School API
List Schools API
MySQL Database Integration
Location-Based Distance Sorting
REST API Architecture
ES Module Syntax
Input Validation
Error Handling
Tech Stack
Node.js
Express.js
MySQL
Nodemon
dotenv
CORS
Project Structure
school-management-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── schoolcontroller.js
│   │
│   ├── routes/
│   │   └── schoolroutes.js
│   │
│   └── utils/
│       └── distanceCalc.js
│
├── .env
├── package.json
├── server.js
└── README.md
Installation
Clone Repository
git clone https://github.com/nitesh404240/school-managment_on_distance.git
Navigate to Project
cd school-management-api
Install Dependencies
npm install
Environment Variables

Create a .env file in the root directory.

PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
Database Setup
Create Database
CREATE DATABASE school_management;
Create Table
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
Run the Server
Development Mode
npm run dev
Production Mode
npm start

Server runs on:

http://localhost:5000
API Endpoints
1. Add School
Endpoint
POST /addSchool
Request Body
{
  "name": "Delhi Public School",
  "address": "New Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}

Success Response
{
  "success": true,
  "message": "School Added Successfully"
}
2. List Schools
Endpoint
GET /listSchools?latitude=28.61&longitude=77.20
Success Response
{
  "success": true,
  "schools": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "New Delhi",
      "latitude": 28.7041,
      "longitude": 77.1025,
      "distance": "12.45 KM"
    }
  ]
}

Distance Calculation

The API uses the Haversine Formula to calculate geographical distance between the user's location and schools.

Testing

APIs were tested using:

Postman
Future Improvements
JWT Authentication
Pagination
Swagger Documentation
Docker Support
Deployment with CI/CD
Advanced Validation
Author

Developed by Nitesh choudhary

License

This project is licensed under the MIT License.
