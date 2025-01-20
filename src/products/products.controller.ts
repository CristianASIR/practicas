import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    // El orden en el que se encuentran estos "Decoradores" influye en la impresión de kas peticiones
    @Get('primer')
    findprimer() {
        return "Primer decorador";
    }
    @Get('segundo')
    findsegundo() {
        return "Segundo decorador";
    }
    @Get()
    getHelloInProducts(): string {
        return "Estamos en productos!!!";
    }
}
