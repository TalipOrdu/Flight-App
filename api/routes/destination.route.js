import express from "express";
import { getDestinations } from "../controller/destination.controller.js";

const router = express.Router();

router.get('/destinations', getDestinations);

export default router;