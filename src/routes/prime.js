import express from "express";
import PrimeNumbers from "../controllers/primeNumbers.js";

const router = express.Router();

router.get("/prime/:sendNumber", PrimeNumbers.printPrimes);

export default router;
