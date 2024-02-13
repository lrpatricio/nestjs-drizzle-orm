import { drizzle } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2';
import * as schema from './schema';

export const DrizzleAsyncProvider = 'drizzleProvider';

export const DrizzleConnection = async () =>
  await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseFloat(process.env.DB_PORT) | 3306,
  });

export const DrizzleDB = async () =>
  drizzle(await DrizzleConnection(), { schema, mode: 'default' });

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => await DrizzleDB(),
    exports: [DrizzleAsyncProvider],
  },
];
