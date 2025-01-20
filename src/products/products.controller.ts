import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    // El orden en el que se encuentran estos "Decoradores" influye en la impresión de kas peticiones
    @Get()
    getHelloInProducts(): string {
        return "Estamos en productos!!!";
    }
    @Get('primer')
    findprimer():string {
        return "Primer decorador";
    }
    @Get('primer/segundo')
    findsegundo():string {
        return "Segundo decorador";
    }
}
