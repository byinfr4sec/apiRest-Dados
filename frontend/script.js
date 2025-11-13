let chartInstance = null;

async function buscarDados() {
  const type = document.getElementById('chartType').value;
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;

  if (!start || !end) {
    alert("Informe as datas de início e fim.");
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/charts/${type}?start=${start}&end=${end}`);
    const data = await res.json();

    const ctx = document.getElementById('chartCanvas').getContext('2d');

    // 🔄 Destroi o gráfico anterior se existir
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Ajusta o formato dos dados
    const labels = data.labels || data.map(d => new Date(d.data).toLocaleDateString());
    const values = data.values || data.map(d => d.valor);

    chartInstance = new Chart(ctx, {
      type: type === 'pizza' ? 'pie' : type,
      data: {
        labels: labels,
        datasets: [{
          label: 'Vendas (R$)',
          data: values,
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            text: `Gráfico de ${type}`
          }
        }
      }
    });
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    alert("Erro ao buscar dados. Verifique se a API está rodando.");
  }
  console.log(`Buscando dados: ${type}, ${start} → ${end}`);
  console.log("Resposta da API:", data);
}