import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateProstitutaDto {
    @ApiProperty({example:`18`, description:`La edad de la prostituta`})
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    edad:number;

    @ApiProperty({example:`5`, description:`Los años de experiencia que tenga la prostituta`})
    @IsNumber()
    @Min(0)
    anosdeexperiencia:number;

    @ApiProperty({example:`1.5`, description:`La estatura que tenga la prostituta en metros`})
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    estatura:number

    @ApiProperty({example:`Rosita Fresita`, description:`El nombre de la prostituta`})
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    nombre:String;

    @ApiProperty({example:`https://fotodelaprostituta`, description:`La url de la imagen de la prostituta`})
    @IsString()
    imagen:String;
}
