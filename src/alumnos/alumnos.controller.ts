import { Controller, Get } from '@nestjs/common';

@Controller('products/alumnos')
export class AlumnosController {
    @Get()
    find() {
        return "Pruebas de controlador";
    }
}
