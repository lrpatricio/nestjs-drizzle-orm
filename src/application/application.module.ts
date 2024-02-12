import { Module } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/domain/ports/out/repository/product.repository';
import ProductDrizzleRepository from 'src/infraestruture/adapters/out/repository/drizzle-mysql/product.drizzle.repository';
import { drizzleProvider } from 'src/infraestruture/database/drizzle/drizzle.provider';
import { ProductCreateUseCase } from './use-cases/product/product.create.usecase';
import { ProductDeleteUseCase } from './use-cases/product/product.delete.usecase';
import { ProductFindAllUseCase } from './use-cases/product/product.findall.usecase';
import { ProductFindByIdUseCase } from './use-cases/product/product.findbyid.usecase';
import { ProductUpdateUseCase } from './use-cases/product/product.update.usecase';

@Module({
  imports: [],
  controllers: [],
  providers: [
    ProductFindAllUseCase,
    ProductFindByIdUseCase,
    ProductCreateUseCase,
    ProductUpdateUseCase,
    ProductDeleteUseCase,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: ProductDrizzleRepository,
    },
    ...drizzleProvider,
  ],
  exports: [
    ProductFindAllUseCase,
    ProductFindByIdUseCase,
    ProductCreateUseCase,
    ProductUpdateUseCase,
    ProductDeleteUseCase,
  ],
})
export class ApplicationModule {}
