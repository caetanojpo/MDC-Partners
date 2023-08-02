import express from "express";
import Palindrome from "../controllers/palindrome.js";

const router = express.Router();

router.get("/palindrome/:word", Palindrome.check);

export default router;
