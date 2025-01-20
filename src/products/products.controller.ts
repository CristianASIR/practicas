import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    // El orden en el que se encuentran estos "Decoradores" influye en la impresión de kas peticiones
    @Get()
    getHelloInProducts(): string {
        return "Totalidad de productos";
    }
    @Get('primer')
    findprimer():string {
        return "Primer decorador";
    }
    @Get('primer/segundo')
    findsegundo():string {
        return "Segundo decorador";
    }
    @Post()
    insertarProduct(): string {
        return "Producto insertado";
    }
    @Put()
    actualizarProduct(): string {
        return "Actualizando producto";
    }
    @Delete()
    borrarProduct(): string {
        return "Producto eliminado";
    }
}
