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
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      
      //Se utiliza la sincronización de los datos cuando estamos en desarrollo
      //Si esta en producción se mantiene desactivada para no provocar conflicto
      synchronize:true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
