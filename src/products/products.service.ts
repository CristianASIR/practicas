import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getHelloInProducts(): string {
        return "Productos totales";
    }
}
