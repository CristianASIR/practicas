import { Module } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { BibliotecaController } from './biblioteca.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from './entities/biblioteca.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Biblioteca], 'base2')],
  controllers: [BibliotecaController],
  providers: [BibliotecaService],
})
export class BibliotecaModule {}
