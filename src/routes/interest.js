import express from "express";
import InterestCalculation from "../controllers/interestCalculation.js";

const router = express.Router();

router.get("/interestcalc", InterestCalculation.calculate);

export default router;
