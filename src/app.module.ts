import { Module } from '@nestjs/common';
import { InfraestrutureModule } from './infraestruture/infraestruture.module';

@Module({
  imports: [InfraestrutureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
