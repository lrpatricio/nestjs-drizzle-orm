import Product from 'src/domain/models/product';
import ProductRepository from 'src/domain/ports/out/repository/product.repository';

export default class ProductMemoryRepository implements ProductRepository {
  private products: Product[] = [];

  async findAll(): Promise<Product[]> {
    console.log('ProductMemoryRepository');
    return this.products;
  }

  async findById(id: number): Promise<Product> {
    return this.products.find((product) => product.id == id);
  }

  create(product: Product): void {
    this.products.push(product);
  }

  update(id: number, product: Product): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products[index] = product;
  }

  delete(id: number): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }
}
