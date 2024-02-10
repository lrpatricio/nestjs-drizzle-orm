import Product from 'src/domain/models/product';
import ProductRepository from 'src/domain/ports/out/repository/product.repository';

export default class ProductRepositoryMemory implements ProductRepository {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  create(product: Product): void {
    this.products.push(product);
  }

  update(product: Product): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
  }

  delete(id: number): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }
}
