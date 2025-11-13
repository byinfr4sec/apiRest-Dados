import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chartRoutes from "./routes/chartRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(chartRoutes);

export default app;
