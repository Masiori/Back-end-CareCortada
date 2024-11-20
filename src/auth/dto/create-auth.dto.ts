import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateAuthDto {
    @ApiProperty({example:`SupermanEnTanga1234`, description:`El nombre de usuario`})
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    user_name:String

    @ApiProperty({example:`********`, description:`La contraseña del usuario`})
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password:String
}
