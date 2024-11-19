import { PartialType } from '@nestjs/swagger';
import { CreateMaquillajeDto } from './create-maquillaje.dto';

export class UpdateMaquillajeDto extends PartialType(CreateMaquillajeDto) {}
