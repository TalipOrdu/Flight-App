import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import flightRoutes from "./routes/flight.route.js";
import airlinesRoutes from "./routes/airline.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => console.log('Error connecting to MongoDB'));

const app = express();
app.use(express.json());

app.use('/api', flightRoutes);
app.use('/api', airlinesRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 