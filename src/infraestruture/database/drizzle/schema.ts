import { sql } from 'drizzle-orm';
import { decimal, int, mysqlTable, text, timestamp } from 'drizzle-orm/mysql-core';

export const products = mysqlTable('products', {
  id: int('id', { unsigned: true }).primaryKey().autoincrement().notNull(),
  name: text('name').notNull(),
  price: decimal('price').notNull(),
  quantity: decimal('quantity').notNull(),
  createdAt: timestamp('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at')
    .onUpdateNow()
    .default(sql`CURRENT_TIMESTAMP`),
});
