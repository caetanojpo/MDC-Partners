import express from "express";
import GradeAverage from "./../controllers/gradeAverage.js";

const router = express.Router();
/**
 * @swagger
 * /grade:
 *   post:
 *     summary: Grade Average
 *     description: Returns the grade average of the informed grades, you should make an array
 *     tags:
 *       - Grade Average
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 grade:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.get("/grade", GradeAverage.getGrades);

export default router;
