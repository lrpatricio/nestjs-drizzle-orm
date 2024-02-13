import 'dotenv/config';
import { Config } from 'drizzle-kit';

export default {
  schema: './src/infraestruture/database/drizzle/schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseFloat(process.env.DB_PORT) | 3306,
  },
  verbose: true,
  strict: true,
  out: './src/infraestruture/database/drizzle/migrations',
} satisfies Config;
