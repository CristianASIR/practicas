import { Module } from '@nestjs/common';
import { GeneracionesService } from './generaciones.service';
import { GeneracionesController } from './generaciones.controller';

@Module({
  controllers: [GeneracionesController],
  providers: [GeneracionesService],
})
export class GeneracionesModule {}
