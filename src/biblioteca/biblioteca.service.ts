import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Biblioteca } from './entities/biblioteca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BibliotecaService {
  constructor (@InjectRepository(Biblioteca, 'base1')
  private bibliotecaRepository:Repository<Biblioteca>
){}
  create(CreateBibliotecaDto: CreateBibliotecaDto) {
    return 'This action adds a new biblioteca';
  }

  findAll() {
    return `This action returns all biblioteca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biblioteca`;
  }

  update(id: number, updateBibliotecaDto: UpdateBibliotecaDto) {
    return `This action updates a #${id} biblioteca`;
  }

  remove(id: number) {
    return `This action removes a #${id} biblioteca`;
  }
}
