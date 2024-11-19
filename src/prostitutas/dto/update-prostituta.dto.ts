import { PartialType } from '@nestjs/swagger';
import { CreateProstitutaDto } from './create-prostituta.dto';

export class UpdateProstitutaDto extends PartialType(CreateProstitutaDto) {}
