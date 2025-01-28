import { Module } from '@nestjs/common';
import { GeneracionesService } from './generaciones.service';
import { GeneracionesController } from './generaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Generacione } from './entities/generacione.entity';

@Module({
  controllers: [GeneracionesController],
  providers: [GeneracionesService],
  imports: [TypeOrmModule.forFeature([Generacione])],
})
export class GeneracionesModule {}
