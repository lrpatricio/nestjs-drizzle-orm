import { Inject, Injectable } from "@nestjs/common";
import ProductRepository from "src/infraestruture/adapters/out/repository/product.repository.memory";

@Injectable()
export class ProductFindAllUseCase {
  constructor(@Inject('ProductRepository') private productRepository: ProductRepository) {}
  
  execute() {
    return this.productRepository.findAll();
  }
}