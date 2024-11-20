import { PartialType } from '@nestjs/swagger';
import { CreateMaquillajeDto } from './create-maquillaje.dto';
import { IsObject } from 'class-validator';
import { Evento } from 'src/eventos/entities/evento.entity';

export class UpdateMaquillajeDto extends PartialType(CreateMaquillajeDto) {}
