import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connection.js"; // Database Connection
import carRoutes from "./routes/carRoutes.js"; // Import Routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Middleware to parse JSON

// Logging Middleware
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`${req.method} ${req.url} - Status: ${res.statusCode}`);
  });
  next();
});

// Routes
app.use("/api", carRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
