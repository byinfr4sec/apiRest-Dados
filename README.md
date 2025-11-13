## 📘 **README.md — API REST Dinâmica (Node.js + TypeScript + Prisma + MySQL)**

```markdown
# ⚙️ API REST Dinâmica — Node.js | TypeScript | Prisma | MySQL

### Desenvolvido por [**Rafael Pereira**](https://github.com/byinfr4sec)
**Desenvolvedor Backend Sênior | Fullstack JavaScript | Especialista em APIs e Banco de Dados**

---

## 🧭 Visão Geral

Este projeto foi desenvolvido como parte de um **teste técnico para a vaga de Desenvolvedor Backend Sênior**.  
O objetivo é demonstrar a minha capacidade de construir uma **API RESTful dinâmica**, moderna e escalável — capaz de se adaptar ao tipo de gráfico solicitado e realizar consultas filtradas em um banco MySQL local.

O sistema inclui:
- **API REST com Node.js + TypeScript**
- **ORM Prisma** conectado ao **MySQL**
- **Filtragem por intervalo de datas**
- **Formatação de resposta dinâmica (pizza, barra, linha)**
- **Testes automatizados (Jest)**
- **Front-end simples com HTML, CSS e JS puro**
- **Visualização de gráficos via Chart.js**

---

## 🧩 Tecnologias Utilizadas

| Categoria | Tecnologia | Finalidade |
|------------|-------------|------------|
| Backend | **Node.js** | Ambiente de execução JavaScript no servidor |
| Linguagem | **TypeScript** | Superset do JS com tipagem estática |
| ORM | **Prisma** | ORM moderno para MySQL, com segurança e produtividade |
| Banco de Dados | **MySQL** | Banco relacional usado na aplicação |
| Testes | **Jest** | Framework de testes unitários e integração |
| Frontend | **HTML + CSS + JS** | Interface de visualização do dashboard |
| Gráficos | **Chart.js** | Biblioteca de renderização de gráficos em JS |

---

## 🗂️ Estrutura do Projeto

```
##
apiRest-Dados/
│
├── prisma/
│   ├── schema.prisma          # Modelo do banco de dados
│   └── seed.ts                # Script opcional de seed
│
├── src/
│   ├── server.ts              # Ponto de entrada da API
│   ├── routes/chartRoutes.ts  # Rotas REST
│   ├── controllers/           # Camada de controle (negócio)
│   ├── services/              # Camada de serviço (consultas Prisma)
│   └── tests/                 # Testes unitários e integração
│
├── frontend/
│   ├── index.html             # Página principal do dashboard
│   ├── style.css              # Estilos (layout profissional)
│   └── script.js              # Comunicação com API e gráficos
│
├── database.sql               # Script SQL para criar e popular o banco
├── package.json               # Configurações e dependências
├── tsconfig.json              # Configuração TypeScript
└── README.md                  # Documentação completa
##
````

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o projeto
```bash
git clone https://github.com/byinfr4sec/apiRest-Dados.git
cd apiRest-Dados
````

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Criar o banco de dados

Execute o script SQL incluso:

```bash
mysql -u root -p < database.sql
```

### 4️⃣ Gerar o cliente Prisma

```bash
npx prisma generate
```

### 5️⃣ Rodar o servidor

```bash
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 📡 Endpoints da API

### **GET /charts/:type**

Retorna dados agregados conforme o tipo de gráfico solicitado.

**Parâmetros obrigatórios:**

* `type`: Tipo do gráfico (`pizza`, `bar`, `line`)
* `start`: Data inicial (`YYYY-MM-DD`)
* `end`: Data final (`YYYY-MM-DD`)

---

### 📊 Exemplo de Requisição:

```
GET /charts/pizza?start=2024-01-01&end=2024-12-31
```

### ✅ Exemplo de Resposta — Gráfico de Pizza

```json
{
  "labels": ["Periférico", "Hardware", "Mobiliário"],
  "values": [1850.8, 9450.0, 2830.0]
}
```

### ✅ Exemplo de Resposta — Gráfico de Linha

```json
[
  { "data": "2024-01-01", "valor": 249.90 },
  { "data": "2024-02-01", "valor": 999.00 }
]
```

---

## 🧪 Testes Automatizados

Execute os testes:

```bash
npm test
```

Os testes verificam:

* Retorno da API em diferentes tipos de gráfico
* Filtragem correta por datas
* Tratamento de erros e parâmetros inválidos

---

## 🖥️ Front-end de Visualização

### 📍 Acesso:

Abra no navegador:

```
frontend/index.html
```

### ⚡ Funcionalidades:

* Seleção de tipo de gráfico (Pizza, Barra, Linha)
* Filtro por data de início e fim
* Atualização dinâmica sem recarregar a página
* Visualização dos resultados via Chart.js
* Layout responsivo e limpo, com tipografia profissional

---

## ☁️ Deploy

### Backend

1. Configure a variável de ambiente:

   ```bash
   DATABASE_URL="mysql://usuario:senha@host:porta/api_dados"
   ```
2. Gere o build:

   ```bash
   npm run build
   ```
3. Inicie o servidor:

   ```bash
   npm start
   ```

### Banco de Dados

Hospedagem recomendada: **PlanetScale**, **Railway**, **AWS RDS** ou **Render MySQL**.

### Frontend

Suba a pasta `frontend/` em qualquer ambiente estático:

* GitHub Pages
* Netlify
* Vercel

---

## 📖 Explicação Técnica

### 🧠 Arquitetura em Camadas

* **Routes:** definem as rotas HTTP.
* **Controllers:** tratam os parâmetros e repassam para os serviços.
* **Services:** executam consultas e agregações no banco.
* **Prisma:** traduz as operações em SQL seguro e performático.

### 🔍 Filtro de Datas

Todas as consultas exigem `start` e `end`, garantindo que os dados retornados sejam específicos ao intervalo desejado.

### 📊 Formato Dinâmico

A resposta é adaptada conforme o gráfico:

* **Pizza:** agrupado por categoria
* **Barra:** agrupado por produto
* **Linha:** evolução temporal de vendas

### 💼 Finalidade

Demonstrar domínio sobre:

* Estrutura de API RESTful moderna
* Boas práticas com Node.js e TypeScript
* ORM Prisma com MySQL
* Integração com visualização de dados
* Documentação técnica e clareza de código

---

## 🧾 Licença

Este projeto foi desenvolvido exclusivamente para **fins de avaliação técnica** e demonstração de competências profissionais.
Sinta-se livre para utilizar como base educacional ou portfólio pessoal, mantendo os créditos originais.

---

## 👨‍💻 Autor

**Rafael Pereira**
Desenvolvedor Backend & Fullstack JavaScript
📍 Foco em APIs, Banco de Dados e Integrações Escaláveis
💻 GitHub: [@byinfr4sec](https://github.com/byinfr4sec)
✉️ Email: [byraphadevops@gmail.com](mailto:byraphadevops@gmail.com)
🚀 “Código limpo, escalável e de fácil manutenção.”

---

