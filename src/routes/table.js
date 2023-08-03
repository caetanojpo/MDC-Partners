import express from "express";
import Table from "../controllers/table.js";

const router = express.Router();
/**
 * @swagger
 * /table/{number}:
 *   get:
 *     summary: Table of a number
 *     description: Send a number and return it's table from 1 to 10.
 *     tags:
 *       - Table
 *     parameters:
 *       - in: path
 *         name: number
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.get("/table/:number", Table.print);

export default router;
