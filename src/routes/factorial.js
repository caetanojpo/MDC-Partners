import express from "express";
import Factorial from "../controllers/factorial.js";

const router = express.Router();

router.get("/factorial/:sendNumber", Factorial.correspondantFactorial);

export default router;
