import { Min } from "class-validator";

export class CreateBibliotecaDto {
    titulo:string;
    autor:string;
    tema:string;
    editorial:string;
    @Min(0,{message:"Inserta valores positivos"})
    precio:number;
    @Min(0,{message:"Inserta valores positivos"})
    stock:number;

}
