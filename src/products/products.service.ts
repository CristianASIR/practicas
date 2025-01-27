import { HttpStatus, Injectable } from '@nestjs/common';
import { Products } from './products.interface';

@Injectable()
export class ProductsService {
    getProducts(): string {
        return "Productos totales";
    }
    private products = [];
    getAll(): Products[] {
        return this.products;
    }
    insert(product: any): { status: HttpStatus, msg: string } {
        this.products = [
            ...this.products,
            product
        ];
        return {
            status: HttpStatus.OK, msg:
                "Nuevo producto añadido"
        }
    }

}
