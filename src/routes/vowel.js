import express from "express";
import VowelCounter from "./../controllers/vowelCounter.js";

const router = express.Router();

router.get("/vowel/:word", VowelCounter.counter);

export default router;
