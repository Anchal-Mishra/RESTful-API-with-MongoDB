🚀 Car API
A simple REST API for managing car data using Node.js, Express, and MongoDB Atlas.

📌 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/car-api.git
cd car-api


2️⃣ Install dependencies
npm install


3️⃣ Create a .env file in the root folder and add:
MONGO_URI=mongodb+srv://CarsData:<your_password>@carsdata.autnf.mongodb.net/
PORT=5000


4️⃣ Run the server
npm start
OR using Nodemon
nodemon server.js


📮 API Endpoints

🔹 Create a Car
POST /api/cars
📌 Body (JSON)
{
  "carName": "Ferrari F8",
  "carType": "Supercar",
  "releaseYear": 2020
}


🔹 Get All Cars
GET /api/cars


🔹 Get a Car by ID
GET /api/cars/{car_id}


🔹 Update a Car by ID
PUT /api/cars/{car_id}
📌 Body (JSON)
{
  "carName": "Tesla Model S Plaid",
  "releaseYear": 2022
}


🔹 Delete a Car by ID
DELETE /api/cars/{car_id}


🔧 Tools & Technologies
Node.js
Express.js
MongoDB Atlas
Mongoose
ThunderClient/Postman


📌 Author
🚀 Developed by Anchal Mishra
