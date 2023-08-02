import express from "express";
import Table from "../controllers/table.js";

const router = express.Router();

router.get("/table/:number", Table.print);

export default router;
