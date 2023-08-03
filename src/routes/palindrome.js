import express from "express";
import Palindrome from "../controllers/palindrome.js";

const router = express.Router();
/**
 * @swagger
 * /palindrome/{word}:
 *   get:
 *     summary: Check if is a palindrome
 *     description: If a word reads the same backwards and forwards it will be a palindrome.
 *     tags:
 *       - Palindrome
 *     parameters:
 *       - in: path
 *         name: word
 *         schema:
 *           type: string
 *         description: Word to be checked
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.get("/palindrome/:word", Palindrome.check);

export default router;
