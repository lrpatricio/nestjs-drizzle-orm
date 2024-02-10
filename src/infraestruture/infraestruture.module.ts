import { Module } from '@nestjs/common';
import ProductController from './adapters/in/api/controllers/product.controller';
import { ApplicationModule } from 'src/applcation/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [ProductController],
  providers: [],
})
export class InfraestrutureModule {}
