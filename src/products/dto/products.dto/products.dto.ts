import { IsEmail, IsInt, IsString, Min, MinLength } from "class-validator";

export class ProductsDto {
    @IsString({message:"Debe contener texto"})
    @MinLength(2,{message:"Como mínimo debe contener 2 caracteres"})
    articulo:string;
    @IsInt({message:"Debe ser un número entero"})
    @Min(0,{message:"El número debe ser positivo"})
    precio:number;
    stock?:number;
    descripcion?:string;
    @IsEmail()
    email?:string

}
