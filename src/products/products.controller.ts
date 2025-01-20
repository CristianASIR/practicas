import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    find(){
        return "Venga, vamos al lío";
    }
}
