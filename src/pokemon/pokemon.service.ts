import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  //Conexión a la base de datos
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>
  ) { }
  //Primeras funciones asincronas que utilizamos
  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemon[]> {
    console.log('📌 Entidades registradas:', this.pokemonRepository.metadata.tableName);
    return this.pokemonRepository.find();
  }
  

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
