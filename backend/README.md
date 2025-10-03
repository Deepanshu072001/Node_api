
# 📇 Contact Management API  
*A Node.js + Express + MongoDB CRUD API Project*



## 📖 Overview
The **Contact Management API** is a backend project built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
It allows you to **create, read, update, and delete contacts** through a simple RESTful API.  

This project is a great starting point for anyone learning how to:
- Build REST APIs with Express
- Connect Node.js apps with MongoDB
- Organize projects using the MVC pattern
- Implement error handling with middleware
- Work with environment variables



## 🎯 Objectives
- Understand API development using **Express**
- Learn **CRUD operations** with MongoDB and Mongoose
- Practice **modular coding** (controllers, models, routes, middleware)
- Implement **custom error handling**
- Use **environment variables** for secure configuration



## 🛠️ Tech Stack
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable manager
- **express-async-handler** – Async error handler



## 📂 Project Structure
BACKEND/
├── config/
│ └── dbConnection.js # MongoDB connection logic
├── controllers/
│ └── contactController.js # Business logic for contact routes
├── middleware/
│ └── errorHandler.js # Centralized error handler
├── models/
│ └── contactModel.js # Contact schema/model
├── routes/
│ └── contactRoutes.js # API routes for contacts
├── constants.js # Custom error status codes
├── server.js # Entry point of the app
├── package.json
└── README.md # Project documentation
└── .env 
└── .gitignore




## ⚙️ Installation & Setup

Setup a New Node.js + Express + MongoDB Project
1. Create a new folder for your project
mkdir contact-api
cd contact-api

2. Initialize a Node.js project
npm init -y


This will create a package.json file with default values.

3. Install dependencies
Required dependencies
npm install express mongoose dotenv


express → framework for building APIs

mongoose → ODM for MongoDB

dotenv → to manage environment variables

Development tools
npm install --save-dev nodemon


nodemon → restarts the server automatically on changes

Error handling helper
npm install express-async-handler


express-async-handler → simplifies error handling in async controllers

4. Setup package.json scripts

Open package.json and update "scripts" like this:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


Now you can run:

Development mode: npm run dev

Production mode: npm start

6. Add environment variables

Create a .env file in the project root:

PORT=5001
CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/contact

7. Start the server

For development (with auto-reload):

npm run dev

For normal production run:

npm run start
Server starts on:
http://localhost:5000

API Endpoints
Base URL
http://localhost:5001/api/contacts

Routes
Method	Endpoint	Description
GET	/	Get all contacts
POST	/	Create a new contact
GET	/:id	Get a contact by ID
PUT	/:id	Update a contact by ID
DELETE	/:id	Delete a contact by ID
📜 Example Usage
➕ Create a New Contact

Request:

POST /api/contacts
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210"
}


Response:

{
  "_id": "64fa123abc456",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "createdAt": "2025-09-23T10:30:00.000Z",
  "updatedAt": "2025-09-23T10:30:00.000Z",
  "__v": 0
}

📋 Get All Contacts
GET /api/contacts

✏️ Update a Contact
PUT /api/contacts/64fa123abc456
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "phone": "9876500000"
}

❌ Delete a Contact
DELETE /api/contacts/64fa123abc456

⚡ Error Handling

All errors are handled centrally in middleware/errorHandler.js.

Example Response (Validation Error)
{
  "title": "Validation Error",
  "message": "All fields are mandatory...",
  "stackTrace": "Error: All fields are mandatory..."
}


Error Codes:

400 – Validation Error

401 – Unauthorized

403 – Forbidden

404 – Not Found

500 – Server Error

🧪 Testing the API

You can test this API using:

Postman

Insomnia

Or simple curl commands.

Example with curl:

curl -X GET http://localhost:5001/api/contacts

🔮 Future Improvements

✅ User Authentication (JWT)

✅ Contact ownership per user

✅ Search & Filter functionality

✅ Pagination for large datasets

✅ Unit & Integration Testing (Jest / Mocha)

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to your branch (git push origin feature-name)


# 📇 Contact Management API  
*A Node.js + Express + MongoDB CRUD API Project*



## 📖 Overview
The **Contact Management API** is a backend project built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
It allows you to **create, read, update, and delete contacts** through a simple RESTful API.  

This project is a great starting point for anyone learning how to:
- Build REST APIs with Express
- Connect Node.js apps with MongoDB
- Organize projects using the MVC pattern
- Implement error handling with middleware
- Work with environment variables



## 🎯 Objectives
- Understand API development using **Express**
- Learn **CRUD operations** with MongoDB and Mongoose
- Practice **modular coding** (controllers, models, routes, middleware)
- Implement **custom error handling**
- Use **environment variables** for secure configuration



## 🛠️ Tech Stack
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable manager
- **express-async-handler** – Async error handler



## 📂 Project Structure
BACKEND/
├── config/
│ └── dbConnection.js # MongoDB connection logic
├── controllers/
│ └── contactController.js # Business logic for contact routes
├── middleware/
│ └── errorHandler.js # Centralized error handler
├── models/
│ └── contactModel.js # Contact schema/model
├── routes/
│ └── contactRoutes.js # API routes for contacts
├── constants.js # Custom error status codes
├── server.js # Entry point of the app
├── package.json
└── README.md # Project documentation
└── .env 
└── .gitignore




## ⚙️ Installation & Setup

Setup a New Node.js + Express + MongoDB Project
1. Create a new folder for your project
mkdir contact-api
cd contact-api

2. Initialize a Node.js project
npm init -y


This will create a package.json file with default values.

3. Install dependencies
Required dependencies
npm install express mongoose dotenv


express → framework for building APIs

mongoose → ODM for MongoDB

dotenv → to manage environment variables

Development tools
npm install --save-dev nodemon


nodemon → restarts the server automatically on changes

Error handling helper
npm install express-async-handler


express-async-handler → simplifies error handling in async controllers

4. Setup package.json scripts

Open package.json and update "scripts" like this:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


Now you can run:

Development mode: npm run dev

Production mode: npm start

6. Add environment variables

Create a .env file in the project root:

PORT=5001
CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/contact

7. Start the server

For development (with auto-reload):

npm run dev

For normal production run:

npm run start
Server starts on:
http://localhost:5000

API Endpoints
Base URL
http://localhost:5001/api/contacts

Routes
Method	Endpoint	Description
GET	/	Get all contacts
POST	/	Create a new contact
GET	/:id	Get a contact by ID
PUT	/:id	Update a contact by ID
DELETE	/:id	Delete a contact by ID
📜 Example Usage
➕ Create a New Contact

Request:

POST /api/contacts
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210"
}


Response:

{
  "_id": "64fa123abc456",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",
  "createdAt": "2025-09-23T10:30:00.000Z",
  "updatedAt": "2025-09-23T10:30:00.000Z",
  "__v": 0
}

📋 Get All Contacts
GET /api/contacts

✏️ Update a Contact
PUT /api/contacts/64fa123abc456
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "phone": "9876500000"
}

❌ Delete a Contact
DELETE /api/contacts/64fa123abc456

⚡ Error Handling

All errors are handled centrally in middleware/errorHandler.js.

Example Response (Validation Error)
{
  "title": "Validation Error",
  "message": "All fields are mandatory...",
  "stackTrace": "Error: All fields are mandatory..."
}


Error Codes:

400 – Validation Error

401 – Unauthorized

403 – Forbidden

404 – Not Found

500 – Server Error

🧪 Testing the API

You can test this API using:

Postman

Insomnia

Or simple curl commands.

Example with curl:

curl -X GET http://localhost:5001/api/contacts

🔮 Future Improvements

✅ User Authentication (JWT)

✅ Contact ownership per user

✅ Search & Filter functionality

✅ Pagination for large datasets

✅ Unit & Integration Testing (Jest / Mocha)

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to your branch (git push origin feature-name)

