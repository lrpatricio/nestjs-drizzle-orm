import { decimal, int, mysqlTable, text } from 'drizzle-orm/mysql-core';

export const products = mysqlTable('products', {
  id: int('id', { unsigned: true }).primaryKey().autoincrement().notNull(),
  name: text('name').notNull(),
  price: decimal('price').notNull(),
  quantity: decimal('quantity').notNull(),
});
