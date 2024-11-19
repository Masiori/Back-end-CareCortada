import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateEventoDto {
    @ApiProperty({example:`Modelitos modelando 2025`, description:`El nombre del evento`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    nombre:String;

    @ApiProperty({example:`20-04-2024`, description:`La fecha de cuando se realizara el evento`})
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    fecha:String;

    @ApiProperty({example:`Centro de eventos Plaza Mayor`, description:`El nombre del lugar donde se realizara el evento`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    lugar:String;

    @ApiProperty({example:`10`, description:`Valor de la entrada al evento en dolares`})
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    valorEntrada:number;
}
