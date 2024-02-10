import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import ProductController from './adapters/in/api/controllers/product.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [ProductController],
  providers: [],
})
export class InfraestrutureModule {}
