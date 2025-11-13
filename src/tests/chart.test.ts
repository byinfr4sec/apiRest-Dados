import request from "supertest";
import app from "../app";

describe("GET /charts/:type", () => {
  it("deve retornar erro sem parâmetros de data", async () => {
    const res = await request(app).get("/charts/pizza");
    expect(res.status).toBe(400);
  });

  it("deve retornar dados válidos para gráfico de pizza", async () => {
    const res = await request(app).get("/charts/pizza?start=2024-01-01&end=2024-12-31");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("labels");
  });
});
