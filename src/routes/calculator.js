import express from "express";
import SimpleCalculator from "../controllers/simpleCalculator.js";

const router = express.Router();
//MUDAR DE PARAMS PARA BODY
router
  .get("/add/:firstNumber/:secondNumber", SimpleCalculator.add)
  .get("/subtract/:firstNumber/:secondNumber", SimpleCalculator.subtract)
  .get("/multiply/:firstNumber/:secondNumber", SimpleCalculator.multiply)
  .get("/divide/:firstNumber/:secondNumber", SimpleCalculator.divide);

export default router;
