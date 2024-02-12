import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfraestrutureModule } from './infraestruture/infraestruture.module';

@Module({
  imports: [
    InfraestrutureModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
