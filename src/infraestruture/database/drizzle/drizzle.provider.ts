import { drizzle } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2';

export const DrizzleAsyncProvider = 'drizzleProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const connection = await createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'proel_erp',
      });
      const db = drizzle(connection);
      return db;
    },
    exports: [DrizzleAsyncProvider],
  },
];
