import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';
import Product from 'src/domain/models/product';
import ProductRepository from 'src/domain/ports/out/repository/product.repository';
import { DrizzleAsyncProvider } from 'src/infraestruture/database/drizzle/drizzle.provider';
import * as schema from '../../../../database/drizzle/schema';

@Injectable()
export default class ProductDrizzleRepository implements ProductRepository {
  constructor(@Inject(DrizzleAsyncProvider) private db: MySql2Database<typeof schema>) {}

  async findAll(): Promise<Product[]> {
    const productsDB = await this.db.select().from(schema.products).limit(100);
    const products: Product[] = [];
    return Object.assign(products, productsDB);
  }

  async findById(id: number): Promise<Product> {
    const productDB = await this.db
      .select()
      .from(schema.products)
      .where(eq(schema.products.id, id));
    const product = new Product();
    return Object.assign(product, productDB);
  }

  async create(product: Product): Promise<void> {
    await this.db.insert(schema.products).values(product);
  }

  async update(id: number, product: Product): Promise<void> {
    await this.db.update(schema.products).set(product).where(eq(schema.products.id, id));
  }

  async delete(id: number): Promise<void> {
    await this.db.delete(schema.products).where(eq(schema.products.id, id));
  }
}
