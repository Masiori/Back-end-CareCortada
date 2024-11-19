import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePhotoDto {
    @ApiProperty({example:`foto1`, description:`El nombre de la foto`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    nombre:String;

    @ApiProperty({example:`https://urldelafoto1`, description:`La url de la foto`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    url:String;

    @ApiProperty({example:`Foto de la organizacion en tamaño 120x80`, description:`La descripcion de la foto`})
    @IsString()
    @MinLength(0)
    descripcion:String;
}
