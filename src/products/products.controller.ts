import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ProductsService } from './products.service';
import { read } from 'fs';
import { Products } from './products.interface';
import { ProductsDto } from './dto/products.dto/products.dto';

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
    @Get('total')
    getTotal() {
        return `El array tiene ${this.serviceProduct.total()} elementos`;
        //Al ejecutar la petición desde el cliente nos aparece el total de elementos
        //que tiene el array en su interior

        //http://localhost:4000/products/total
    }
    //Filtrar busqueda por el parámetro especificado
    @Get(':id')
    getId(@Param('id',ParseIntPipe) id: number): Products {
        return this.serviceProduct.findOne(id);
        }
    @Post()
    createProduct(@Body() articulo:ProductsDto): { status: HttpStatus, msg: string } {
        return this.serviceProduct.insert({
            //Insertar producto y ID por no tener clave primaria en este momento
            id: this.serviceProduct.getAll().length + 1,
            articulo.articulo,
            articulo.precio
        });
    }
    @Put(':id')
    actualizarProduct(@Param('id') dato: number, @Body() producto: any) {
        return this.serviceProduct.update(dato, producto);
    }
    @Delete(':id')
    borrarProduct(@Param('id') dato: number): string {
        return this.serviceProduct.delete(dato);
    }
}
