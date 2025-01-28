import { Injectable } from '@nestjs/common';
import { CreateGeneracioneDto } from './dto/create-generacione.dto';
import { UpdateGeneracioneDto } from './dto/update-generacione.dto';

@Injectable()
export class GeneracionesService {
  create(createGeneracioneDto: CreateGeneracioneDto) {
    return 'Crear nueva generación';
  }

  findAll() {
    return `Todas las generaciones`;
  }

  findOne(id: number) {
    return `ID#${id} de la generación`;
  }

  update(id: number, updateGeneracioneDto: UpdateGeneracioneDto) {
    return `Actualización de ID#${id} de la generación`;
  }

  remove(id: number) {
    return `Eliminar #${id} generación`;
  }
}
