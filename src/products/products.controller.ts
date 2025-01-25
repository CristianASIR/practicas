import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

interface datos { id: string, size: string };
type Product = { articulo: string, precio: number, descripcion: string };
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
    /*
    //Anidar las funciones para que aparezcan dependiendo de su existencia
    @Get(':id?/:size?')
        findWithOptional(@Param() params: any) {
        const { id,size } = params;
        if (size && id) {
        return `Item ${id} de tamaño ${size}`;
        } else if (id) {
        return `Todos los items de tamaño ${id}`;
        } else {
        return 'Todos los items';
        }
    }
    */
    //Los parámetros generales se implementan en la última parte de los parámetros
    //Recoge el contenido del parámetro sea cual sea y lo ingresa en la ruta principal como una cadena
    @Get(':id')
    findID(@Param() parametros: any): string {
        return `Productos obtenidos mediante parámetro ${parametros.id}`
    }
    @Get(':id/:size')
    findIDSize(@Param() parametros: datos): string {
        return `Productos obtenidos mediante parámetro ${parametros.size}`
    }
    //Insertar/Crear datos en BODY
    // @Post( )
    // insertarProduct(@Body('articulo') articulo:string, @Body('precio') precio:number): string {
    //     return `Producto ${articulo} con precio ${precio} se ha insertado correctamente`;
    // }
    @Post()
    //Generar producto sin estado
    // @HttpCode(HttpStatus.NO_CONTENT)
    insertarProduct(@Body() producto: Product) {
        //Crear condicional para insertar productos, en caso de pertenecer a "Ordenata" se inserta
        if (producto.articulo === 'Ordenata')
            return {
                status: HttpStatus.OK,
                message: `${producto.articulo} tiene un precio de ${producto.precio}.`
            }
            //De lo contrario no inserta nada
        else {

            return {
                status: HttpStatus.NOT_ACCEPTABLE,
                message: `Este producto no se ha insertado.`
            }
        }

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
