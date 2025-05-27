import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
import dotenv from 'dotenv';
import path from 'path';

// Carrega as variáveis de ambiente de teste
dotenv.config({ path: path.resolve(__dirname, '../../.env.test') });

const prisma = new PrismaClient();

beforeAll(async () => {
  // Cria o banco de dados de teste se não existir
  try {
    execSync('npx prisma migrate deploy', {
      env: {
        ...process.env,
        DATABASE_URL: process.env.DATABASE_URL
      }
    });
  } catch (error) {
    console.error('Erro ao executar migrações:', error);
  }

  await prisma.$connect();
});

afterAll(async () => {
  // Fecha a conexão com o banco após os testes
  await prisma.$disconnect();
});

afterEach(async () => {
  // Limpa todas as tabelas após cada teste
  const tables = ['User'];
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE;`);
  }
}); 