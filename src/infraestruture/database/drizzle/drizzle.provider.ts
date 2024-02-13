import { drizzle } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2';

export const DrizzleAsyncProvider = 'drizzleProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: parseFloat(process.env.DB_PORT) | 3306,
      });
      const db = drizzle(connection);
      return db;
    },
    exports: [DrizzleAsyncProvider],
  },
];
