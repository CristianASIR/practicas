import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products/products.controller';
import { AlumnosController } from './alumnos/alumnos.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
  ],
  controllers: [ProductsController, AlumnosController],
  providers: [ProductsService],
})
export class AppModule {}
