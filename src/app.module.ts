import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { ClientesModule } from './clientes/clientes.module';
import { GeneracionesModule } from './generaciones/generaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    ProductsModule,
    ClientesModule,
    GeneracionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
