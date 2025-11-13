import prisma from "../config/db";

export async function getChartData(type: string, start: string, end: string) {
  const vendas = await prisma.venda.findMany({
    where: {
      data: {
        gte: new Date(start),
        lte: new Date(end)
      }
    }
  });

  if (!vendas.length) {
    return { message: "Nenhum dado encontrado para o período informado." };
  }

  switch (type) {
    case "pizza":
      const agrupado = vendas.reduce((acc, v) => {
        acc[v.categoria] = (acc[v.categoria] || 0) + v.valor;
        return acc;
      }, {} as Record<string, number>);
      return { labels: Object.keys(agrupado), values: Object.values(agrupado) };

    case "line":
      return vendas.map(v => ({ data: v.data, valor: v.valor }));

    case "bar":
      const somaPorProduto = vendas.reduce((acc, v) => {
        acc[v.produto] = (acc[v.produto] || 0) + v.valor;
        return acc;
      }, {} as Record<string, number>);
      return { labels: Object.keys(somaPorProduto), values: Object.values(somaPorProduto) };

    default:
      throw new Error("Tipo de gráfico inválido. Use 'pizza', 'bar' ou 'line'.");
  }
}
