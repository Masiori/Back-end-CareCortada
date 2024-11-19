import { PartialType } from '@nestjs/swagger';
import { CreateDrogasDto } from './create-drogas.dto';

export class UpdateDrogasDto extends PartialType(CreateDrogasDto) {}
