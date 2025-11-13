import express from "express";
import { chartController } from "../controllers/chartController";

const router = express.Router();

router.get("/charts/:type", chartController);

export default router;
