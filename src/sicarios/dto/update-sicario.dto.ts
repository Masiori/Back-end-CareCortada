import { PartialType } from '@nestjs/swagger';
import { CreateSicarioDto } from './create-sicario.dto';

export class UpdateSicarioDto extends PartialType(CreateSicarioDto) {}
