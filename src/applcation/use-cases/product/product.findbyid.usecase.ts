import { Inject, Injectable } from "@nestjs/common";
import ProductRepository from "src/infraestruture/adapters/out/repository/product.repository.memory";

@Injectable()
export class ProductFindByIdUseCase {
  constructor(@Inject('ProductRepository') private productRepository: ProductRepository) {}
  
  execute(id: number) {
    return this.productRepository.findById(id);
  }
}