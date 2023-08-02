import express from "express";
import GradeAverage from "./../controllers/gradeAverage.js";

const router = express.Router();

router.get("/grade", GradeAverage.getGrades);

export default router;
