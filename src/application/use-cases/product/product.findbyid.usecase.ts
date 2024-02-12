import { Inject, Injectable } from '@nestjs/common';
import ProductRepository, {
  PRODUCT_REPOSITORY,
} from 'src/domain/ports/out/repository/product.repository';

@Injectable()
export class ProductFindByIdUseCase {
  constructor(@Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository) {}

  execute(id: number) {
    return this.productRepository.findById(id);
  }
}
