import express from "express";
import VowelCounter from "./../controllers/vowelCounter.js";

const router = express.Router();
/**
 * @swagger
 * /vowel/{word}:
 *   get:
 *     summary: Vowel Counter
 *     description: Send a word and returns the number of vowels.
 *     tags:
 *       - Vowel Counter
 *     parameters:
 *       - in: path
 *         name: word
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Your request was a success!
 */
router.get("/vowel/:word", VowelCounter.counter);

export default router;
