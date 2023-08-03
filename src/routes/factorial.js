import express from "express";
import Factorial from "../controllers/factorial.js";

const router = express.Router();
/**
 * @swagger
 * /factorial/{sendNumber}:
 *   get:
 *     summary: Calculate the factorial of a number
 *     description: A program that allows the user to enter a number and display the corresponding factorial.
 *     tags:
 *       - Factorial
 *     parameters:
 *       - in: path
 *         name: sendNumber
 *         schema:
 *           type: integer
 *         description: Number to return the factorial
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.get("/factorial/:sendNumber", Factorial.correspondantFactorial);

export default router;
