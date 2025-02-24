import mongoose from "mongoose";

// Car Schema with validation
const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: [true, "Car name is required"],
      unique: true, // Ensures car names are unique
      trim: true,
    },
    carType: {
      type: String,
      required: [true, "Car type is required"],
      trim: true,
    },
    releaseYear: {
      type: Number,
      required: [true, "Release year is required"],
      min: [1886, "Enter a valid year (1886 or later)"], // First car was made in 1886
    },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt fields
);

// Creating the Car model
const Car = mongoose.model("Car", carSchema);

export default Car;
