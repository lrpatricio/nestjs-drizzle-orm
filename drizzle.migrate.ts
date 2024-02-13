import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { createConnection } from 'mysql2';
import * as schema from 'src/infraestruture/database/drizzle/schema';

async function runMigrate() {
  const connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });
  const db = drizzle(connection, { schema, mode: 'default' });

  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, {
    migrationsFolder: './src/infraestruture/database/drizzle/migrations',
  });
  // Don't forget to close the connection, otherwise the script will hang
  connection.end();
}
runMigrate();
