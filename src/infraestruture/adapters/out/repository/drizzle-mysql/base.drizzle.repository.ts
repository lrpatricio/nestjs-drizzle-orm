import { eq } from 'drizzle-orm';
import { MySqlColumn, MySqlTable } from 'drizzle-orm/mysql-core';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '../../../../database/drizzle/schema';

export default abstract class BaseDrizzleRepository<DomainModel> {
  constructor(
    private db: MySql2Database<typeof schema>,
    private schemaTable: MySqlTable,
    private schemaPrimaryKey: MySqlColumn,
    private instanceDomainModel: DomainModel,
  ) {}

  async findAll(): Promise<DomainModel[]> {
    const productsDB = await this.db.select().from(this.schemaTable).limit(100);
    const products: DomainModel[] = [];
    return Object.assign(products, productsDB);
  }

  async findById(id: number): Promise<DomainModel> {
    const productDB = await this.db
      .select()
      .from(this.schemaTable)
      .where(eq(this.schemaPrimaryKey, id));
    return Object.assign(this.instanceDomainModel, productDB);
  }

  async create(newObject: DomainModel): Promise<void> {
    await this.db.insert(this.schemaTable).values(newObject);
  }

  async update(id: number, newObject): Promise<void> {
    await this.db.update(this.schemaTable).set(newObject).where(eq(this.schemaPrimaryKey, id));
  }

  async delete(id: number): Promise<void> {
    await this.db.delete(this.schemaTable).where(eq(this.schemaPrimaryKey, id));
  }
}
