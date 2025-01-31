import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Biblioteca } from './entities/biblioteca.entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class BibliotecaService {
  constructor(@InjectRepository(Biblioteca, 'base2')
  private bibliotecaRepository: Repository<Biblioteca>
  ) { }
  async create(CreateBibliotecaDto: CreateBibliotecaDto): Promise<Biblioteca> {
    const libro = this.bibliotecaRepository.create(CreateBibliotecaDto);
    return this.bibliotecaRepository.save(libro);
  }

  async findAll(): Promise<Biblioteca[]> {
    return this.bibliotecaRepository.find();
  }

  async findOne(id: number): Promise<Biblioteca> {
    return this.bibliotecaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBibliotecaDto: UpdateBibliotecaDto): Promise<string> {
    const libro = await this.findOne(id);
    this.bibliotecaRepository.merge(libro, updateBibliotecaDto);
    this.bibliotecaRepository.save(libro);
    return `El libro #${id} se ha modificado `;
  }

  async remove(id: number): Promise<string> {
    const libro = await this.findOne(id);
    this.bibliotecaRepository.remove(libro);
    return `El libro #${id} se ha eliminado `;
  }
  async buscarEditorial(editorial: string): Promise<Biblioteca[]>{
    return this.bibliotecaRepository.find({ where: { editorial: editorial } })
  }
  async buscarStock(stock: number): Promise<Biblioteca[]>{
    return this.bibliotecaRepository.find({ where: { stock: MoreThan(stock) } })
  }
}
