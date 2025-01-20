import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/primera')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/productos')
  getProductos(): string {
    return this.appService.getProductos();
  }
  @Post()
  createProduct(@Body() body){
    return `Creo un producto ${body.articulo} con precio ${body.precio}`;
    }
    

}
