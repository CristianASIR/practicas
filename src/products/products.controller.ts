import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    // El orden en el que se encuentran estos "Decoradores" influye en la impresión de kas peticiones
    @Get()
    getHelloInProducts(): string {
        return "Totalidad de productos";
    }
    @Get('primer')
    findprimer(): string {
        return "Primer decorador";
    }
    @Get('primer/segundo')
    findsegundo(): string {
        return "Segundo decorador";
    }
    //
    @Get('hot')
    findHot() {
        return "Productos en caliente"
    }

    //Los parámetros generales se implementan en la última parte de los parámetros
    //Recoge el contenido del parámetro sea cual sea y lo ingresa en la ruta principal como una cadena
    @Get(':id')
    findID(@Param()  parametros :any) :string{
        return `Productos obtenidos mediante parámetro ${parametros.id}`
    }
    @Get(':id/:size')
    findIDSize(@Param() tipo:string, talla:string) :string{
        return `Productos obtenidos mediante parámetro ${talla}`
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
