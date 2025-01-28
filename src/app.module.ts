import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { ClientesModule } from './clientes/clientes.module';
import { GeneracionesModule } from './generaciones/generaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    ProductsModule,
    ClientesModule,
    GeneracionesModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'usuario',
      database:'apitarea',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
