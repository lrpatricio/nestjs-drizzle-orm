import Product from '../../../models/product';

export const PRODUCT_REPOSITORY = 'ProductRepository';

export default interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product>;
  create(product: Product): void;
  update(id: number, product: Product): void;
  delete(id: number): void;
}
