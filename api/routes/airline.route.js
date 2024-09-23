import express, { Router } from "express";
import { getAirlines } from "../controller/airline.controller.js";

const router = express.Router();

router.get('/airlines', getAirlines);

export default router;