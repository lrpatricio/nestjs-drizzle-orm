import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductCreateUseCase } from 'src/application/use-cases/product/product.create.usecase';
import { ProductDeleteUseCase } from 'src/application/use-cases/product/product.delete.usecase';
import { ProductFindAllUseCase } from 'src/application/use-cases/product/product.findall.usecase';
import { ProductFindByIdUseCase } from 'src/application/use-cases/product/product.findbyid.usecase';
import { ProductUpdateUseCase } from 'src/application/use-cases/product/product.update.usecase';
import Product from 'src/domain/models/product';
import ProductRequest from '../requests/product.request';

@Controller('products')
export default class ProductController {
  constructor(
    private productFindAllUseCase: ProductFindAllUseCase,
    private productFindByIdUseCase: ProductFindByIdUseCase,
    private productCreateUseCase: ProductCreateUseCase,
    private productUpdateUseCase: ProductUpdateUseCase,
    private productDeleteUseCase: ProductDeleteUseCase,
  ) {}

  @Get()
  findAll() {
    return this.productFindAllUseCase.execute();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.productFindByIdUseCase.execute(id);
  }

  @Post()
  create(@Body() product: ProductRequest) {
    this.productCreateUseCase.execute(Object.assign(new Product(), product));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: ProductRequest) {
    this.productUpdateUseCase.execute(id, Object.assign(new Product(), product));
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productDeleteUseCase.execute(id);
  }
}
