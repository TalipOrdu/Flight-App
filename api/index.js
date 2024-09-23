import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import flightRoutes from "./routes/flight.route.js";
import airlinesRoutes from "./routes/airline.route.js";
import destinationRoutes from "./routes/destination.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => console.log('Error connecting to MongoDB'));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', flightRoutes);
app.use('/api', airlinesRoutes);
app.use('/api', destinationRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});