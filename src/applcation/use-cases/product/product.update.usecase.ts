import { Inject, Injectable } from "@nestjs/common";
import Product from "src/domain/models/product";
import ProductRepository from "src/infraestruture/adapters/out/repository/product.repository.memory";

@Injectable()
export class ProductUpdateUseCase {
  constructor(@Inject('ProductRepository') private productRepository: ProductRepository) {}
  
  execute(product: Product) {
    this.productRepository.update(product);
  }
}