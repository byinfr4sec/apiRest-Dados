import { Request, Response } from "express";
import { getChartData } from "../services/chartService";

export async function chartController(req: Request, res: Response) {
  try {
    const { type } = req.params;
    const { start, end } = req.query;

    if (!start || !end) {
      return res.status(400).json({ error: "Os parâmetros 'start' e 'end' são obrigatórios." });
    }

    const data = await getChartData(type, String(start), String(end));
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
