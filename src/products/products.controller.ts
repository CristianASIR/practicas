import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ProductsService } from './products.service';

interface datos { id: string, size: string };

//Definir "product" en los parámetros que le hemos especificado
type Product = { articulo: string, precio: number, descripcion: string };

//Convertir cadena en numero
type id={id:number};
@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}
    // El orden en el que se encuentran estos "Decoradores" influye en la impresión de kas peticiones
    @Get()
    getHelloInProducts(): string {
        return this.productService.getHelloInProducts();
        //Desde el navegador intentamos acceder al raíz y comprobamos el resultado. Debe ser el mismo
        //que en inicio puesto que la salida la hemos transladado al "servicio"
    }
    @Get('primer')
    findprimer(): string {
        return "Primer decorador";
    }
    @Get('primer/segundo')
    findsegundo(): string {
        return "Segundo decorador";
    }

    //Filtrar búsquedas según los parámetros introducidos
    @Get('query')
    buscar(@Query() dato:any) :string{
        return `Consultas realizadas a ${dato.articulo} con precio ${dato.precio}`;
        //Comprobaciones: http://localhost:4000/products/query?articulo="raton"&precio=264,50
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

    //Actualizar producto dentro de "Body"
    @Put(':id')//:ID es la parte del decorador que no se va a actualizar
    //Devolver una cadena indicando que el producto con ID?? necesita actualización de datos.
    actualizarProduct(@Param()ruta:any,@Body() actualizar:any):string {
        return `El producto ${actualizar.id} se debe actualizar el precio`;
    }

    //Eliminar registro si existe
    @Delete(':id')
    //Leer producto de la URL
    borrarProduct(@Param('id',ParseIntPipe) producto:number): string {
        return `Producto ${producto} eliminado`;
    }
}
