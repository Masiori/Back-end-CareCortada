import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateDrogasDto {
    @ApiProperty({example:`Tusi`, description:`El nombre de la droga`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    nombre:String;

    @ApiProperty({example:`Pablo drogas`, description:`La marca de la droga`})
    @IsString()
    @MinLength(3)
    marca:String;

    @ApiProperty({example:`10`, description:`El precio de la droga en dolares por gramo`})
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    precio:number;
}
