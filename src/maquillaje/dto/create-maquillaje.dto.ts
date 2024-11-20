import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject, IsString, Min, MinLength } from "class-validator";
import { Evento } from "src/eventos/entities/evento.entity";

export class CreateMaquillajeDto {
    @ApiProperty({example:`Mascara`, description:`El tipo de maquillaje`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    tipoMaquillaje:String;

    @ApiProperty({example:`20`, description:`El precio del maquillaje en dolares`})
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    precio:number;

    @ApiProperty({example:`Born this way`, description:`El nombre del maquillaje`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    nombre:String;

    @ApiProperty({example:`Too Face`, description:`El nombre de la marca del maquillaje`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    marca:String;

    @ApiProperty({example:`https://fotoMaquillaje`, description:`La url de la foto del maquillaje`})
    @IsString()
    @MinLength(3)
    imagen:String;
}
