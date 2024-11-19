import { Injectable } from '@nestjs/common';
import { CreateProstitutaDto } from './dto/create-prostituta.dto';
import { UpdateProstitutaDto } from './dto/update-prostituta.dto';

@Injectable()
export class ProstitutasService {
  create(createProstitutaDto: CreateProstitutaDto) {
    return 'This action adds a new prostituta';
  }

  findAll() {
    return `This action returns all prostitutas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prostituta`;
  }

  update(id: number, updateProstitutaDto: UpdateProstitutaDto) {
    return `This action updates a #${id} prostituta`;
  }

  remove(id: number) {
    return `This action removes a #${id} prostituta`;
  }
}
