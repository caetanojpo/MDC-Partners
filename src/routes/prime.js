import express from "express";
import PrimeNumbers from "../controllers/primeNumbers.js";

const router = express.Router();
/**
 * @swagger
 * /prime/{sendNumber}:
 *   get:
 *     summary: Check Prime Number
 *     description: Send a number to check if is a prime number.
 *     tags:
 *       - Prime Numbers
 *     parameters:
 *       - in: path
 *         name: sendNumber
 *         schema:
 *           type: integer
 *         description: Prime number to be checked
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.get("/prime/:sendNumber", PrimeNumbers.printPrimes);

export default router;
