import express from "express";
import SimpleCalculator from "../controllers/simpleCalculator.js";

const router = express.Router();

router
  /**
   * @swagger
   * /calculator/add:
   *   post:
   *     summary: Add operation
   *     description: Add two numbers informed on the body
   *     tags:
   *       - Calculator
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstNumber:
   *                 type: integer
   *               secondNumber:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Your request was a success!
   */
  .post("/calculator/add", SimpleCalculator.add)
  /**
   * @swagger
   * /calculator/subtract:
   *   post:
   *     summary: Subtract operation
   *     description: Subtract two numbers informed on the body
   *     tags:
   *       - Calculator
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstNumber:
   *                 type: integer
   *               secondNumber:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Your request was a success!
   */
  .post("/calculator/subtract", SimpleCalculator.subtract)
  /**
   * @swagger
   * /calculator/multiply:
   *   post:
   *     summary: Multiply operation
   *     description: Multiply two numbers informed on the body
   *     tags:
   *       - Calculator
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstNumber:
   *                 type: integer
   *               secondNumber:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Your request was a success!
   */
  .post("/calculator/multiply", SimpleCalculator.multiply)
  /**
   * @swagger
   * /calculator/divide:
   *   post:
   *     summary: Divide operation
   *     description: Divide two numbers informed on the body
   *     tags:
   *       - Calculator
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstNumber:
   *                 type: integer
   *               secondNumber:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Your request was a success!
   */
  .post("/calculator/divide", SimpleCalculator.divide);

export default router;
