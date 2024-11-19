import { MinLength, IsNotEmpty, IsString, IsNumber, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateModeloDto {
    @ApiProperty({example:`18`, description:`La edad de la modelo`})
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    edad:number;

    @ApiProperty({example:`5`, description:`Los años de experiencia que tenga la modelo`})
    @IsNumber()
    @Min(0)
    anosdeexperiencia:number;

    @ApiProperty({example:`1.8`, description:`La estatura que tenga la modelo en metros`})
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    estatura:number

    @ApiProperty({example:`Laura Martinez`, description:`El nombre de la modelo`})
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    nombre:String;

    @ApiProperty({example:`https://fotodelamodelo`, description:`La url de la imagen de la modelo`})
    @IsString()
    imagen:String;
}
