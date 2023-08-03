import express from "express";
import InterestCalculation from "../controllers/interestCalculation.js";

const router = express.Router();
/**
 * @swagger
 * /interestcalc:
 *   post:
 *     summary: Calculate investment
 *     description: Submit an initial capital, interest rate and investment time (in months)
 *     tags:
 *       - Interest Calculation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               initialCapital:
 *                 type: integer
 *               interestRate:
 *                 type: number
 *                 format: double
 *               monthsOfInvestment:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.post("/interestcalc", InterestCalculation.calculate);

export default router;
