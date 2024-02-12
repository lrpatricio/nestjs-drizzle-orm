import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/infraestruture/database/drizzle/schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'proel_erp',
    port: 3306,
  },
  verbose: true,
  strict: true,
  out: './src/infraestruture/database/drizzle/migrations',
});
