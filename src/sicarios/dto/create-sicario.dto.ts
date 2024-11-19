import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSicarioDto {
    @ApiProperty({example:`El enano`, description:`El nombre clave del sicario`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    nombreClave:String;

    @ApiProperty({example:`50`, description:`Cantidad de trabajos realizados por el sicario`})
    @IsNumber()
    @Min(0)
    trabajosRealizados:number;

    @ApiProperty({example:`100`, description:`La tarifa minima del sicario en dolares`})
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    tarifaMinima:number;
}
