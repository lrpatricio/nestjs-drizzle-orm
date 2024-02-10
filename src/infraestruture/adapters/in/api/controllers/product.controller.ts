import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ProductCreateUseCase } from "src/applcation/use-cases/product/product.create.usecase";
import { ProductDeleteUseCase } from "src/applcation/use-cases/product/product.delete.usecase";
import { ProductFindAllUseCase } from "src/applcation/use-cases/product/product.findall.usecase";
import { ProductFindByIdUseCase } from "src/applcation/use-cases/product/product.findbyid.usecase";
import { ProductUpdateUseCase } from "src/applcation/use-cases/product/product.update.usecase";

@Controller('products')
export default class ProductController {
    constructor(private productFindAllUseCase: ProductFindAllUseCase,
                private productFindByIdUseCase: ProductFindByIdUseCase,
                private productCreateUseCase: ProductCreateUseCase,
                private productUpdateUseCase: ProductUpdateUseCase,
                private productDeleteUseCase: ProductDeleteUseCase) {
    }

    @Get()
    findAll() {
        return this.productFindAllUseCase.execute();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.productFindByIdUseCase.execute(id);
    }

    @Post()
    create(@Body() product) {
        this.productCreateUseCase.execute(product);
    }

    @Put()
    update(@Body() product) {
        this.productUpdateUseCase.execute(product);
    }

    @Delete(':id')
    delete(id: number) {
        this.productDeleteUseCase.execute(id);
    }
}