import { Module } from '@nestjs/common';
import ProductRepositoryMemory from 'src/infraestruture/adapters/out/repository/product.repository.memory';
import { ProductFindAllUseCase } from './use-cases/product/product.findall.usecase';
import { ProductFindByIdUseCase } from './use-cases/product/product.findbyid.usecase';
import { ProductCreateUseCase } from './use-cases/product/product.create.usecase';
import { ProductUpdateUseCase } from './use-cases/product/product.update.usecase';
import { ProductDeleteUseCase } from './use-cases/product/product.delete.usecase';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductFindAllUseCase, ProductFindByIdUseCase, ProductCreateUseCase, ProductUpdateUseCase, ProductDeleteUseCase, { provide: 'ProductRepository', useClass: ProductRepositoryMemory }],
  exports: [ProductFindAllUseCase, ProductFindByIdUseCase, ProductCreateUseCase, ProductUpdateUseCase, ProductDeleteUseCase],
})
export class ApplicationModule {}
