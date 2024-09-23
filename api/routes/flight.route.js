import express from "express";
import { getFlights } from "../controller/flight.controller.js";

const router = express.Router();

router.get('/flights', getFlights)

export default router;