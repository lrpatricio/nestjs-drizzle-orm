import { Inject, Injectable } from '@nestjs/common';
import Product from 'src/domain/models/product';
import ProductRepository, {
  PRODUCT_REPOSITORY,
} from 'src/domain/ports/out/repository/product.repository';

@Injectable()
export class ProductUpdateUseCase {
  constructor(@Inject(PRODUCT_REPOSITORY) private productRepository: ProductRepository) {}

  execute(id: number, product: Product) {
    this.productRepository.update(id, product);
  }
}
