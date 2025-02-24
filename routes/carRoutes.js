import express from "express";
import Car from "../models/carSchema.js"; // Import Car Model

const router = express.Router();

// Middleware to validate required fields in POST and PUT requests
const validateCar = (req, res, next) => {
  const { carName, carType, releaseYear } = req.body;

  if (!carName || !carType || !releaseYear) {
    return res.status(400).json({ message: "Missing required fields: carName, carType, releaseYear" });
  }

  next();
};

// Get all cars
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Get a car by ID
router.get("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Invalid Car ID", error: error.message });
  }
});

// Add a new car
router.post("/cars", validateCar, async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: "Error adding car", error: error.message });
  }
});

// Update an existing car
router.put("/cars/:id", validateCar, async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedCar) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: "Error updating car", error: error.message });
  }
});

// Delete a car by ID
router.delete("/cars/:id", async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: "Car not found" });

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car", error: error.message });
  }
});

export default router;
