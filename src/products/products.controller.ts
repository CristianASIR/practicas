import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ProductsService } from './products.service';
import { read } from 'fs';
import { Products } from './products.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly serviceProduct: ProductsService) { }
    @Get()
    getProducts(): Products[] {
        return this.serviceProduct.getAll();
        //Desde el navegador intentamos acceder al raíz y comprobamos el resultado. Debe ser el mismo
        //que en inicio puesto que la salida la hemos transladado al "servicio"
    }
    @Get()
    getAllProducts() {
        return this.serviceProduct.getAll();
    }
    @Post()
    createProduct(@Body('articulo') articulo: string,
        @Body('precio', ParseFloatPipe) precio: number): { status: HttpStatus, msg: string } {
        return this.serviceProduct.insert({
            //Insertar producto y ID por no tener clave primaria en este momento
            id: this.serviceProduct.getAll().length + 1,
            articulo,
            precio
        });
    }
}
