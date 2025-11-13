import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.venda.createMany({
    data: [
      { produto: 'Teclado', categoria: 'Periférico', valor: 150, data: new Date('2024-02-10') },
      { produto: 'Mouse', categoria: 'Periférico', valor: 90, data: new Date('2024-03-15') },
      { produto: 'Monitor', categoria: 'Hardware', valor: 900, data: new Date('2024-05-20') },
      { produto: 'Notebook', categoria: 'Hardware', valor: 4500, data: new Date('2024-06-01') },
      { produto: 'Cadeira Gamer', categoria: 'Mobiliário', valor: 1200, data: new Date('2024-07-22') }
    ]
  });
}

main()
  .then(() => console.log('Banco populado com sucesso!'))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
