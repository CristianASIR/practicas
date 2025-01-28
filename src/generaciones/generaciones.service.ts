import { Injectable } from '@nestjs/common';
import { CreateGeneracioneDto } from './dto/create-generacione.dto';
import { UpdateGeneracioneDto } from './dto/update-generacione.dto';

@Injectable()
export class GeneracionesService {
  create(createGeneracioneDto: CreateGeneracioneDto) {
    return 'This action adds a new generacione';
  }

  findAll() {
    return `This action returns all generaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generacione`;
  }

  update(id: number, updateGeneracioneDto: UpdateGeneracioneDto) {
    return `This action updates a #${id} generacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} generacione`;
  }
}
