import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

    //Filtrar productos por ID
    getId(id: number): Products {
        return this.products.find((item: Products) => item.id == id);
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
    update(id: number, body: any) {
        let product: Products = {
            id,
            articulo: body.articulo,
            precio: body.precio,
            email: body.email
        }
        this.products = this.products.map((item: Products) => {
            console.log(item, id, item.id == id);
            return item.id == id ? product : item;
        });
    }
    delete(id: number) {
        this.products.filter((item: Products) => item.id != id);
        return 'Producto eliminado'
    }
    total(): number {
        return this.products.length;
    }
    //Control de errores
    findOne(id: number): Products {
        const product = this.products.find((item: Products) => item.id == id);
        if (product) {
            return product;
        } else {
            //Si el producto no existe muestra el siguiente error
            throw new NotFoundException(`No encontramos el producto ${id}`);
        }
    }

}
