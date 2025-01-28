import { Module } from '@nestjs/common';
import { GeneracionesService } from './generaciones.service';
import { GeneracionesController } from './generaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Generaciones } from './entities/generaciones.entity';

@Module({
  controllers: [GeneracionesController],
  providers: [GeneracionesService],
  imports: [TypeOrmModule.forFeature([Generaciones])],
})
export class GeneracionesModule {}
