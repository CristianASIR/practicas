import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Primeras pruebas';
  }
  getProductos(): string {
    return 'Listado de productos';
  }
}
