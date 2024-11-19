import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProstitutaDto } from './dto/create-prostituta.dto';
import { UpdateProstitutaDto } from './dto/update-prostituta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prostituta } from './entities/prostituta.entity';

@Injectable()
export class ProstitutasService {
  constructor(
    @InjectRepository(Prostituta)
    private readonly prostitutaRepository: Repository<Prostituta>
  ){}

  async create(createProstitutaDto: CreateProstitutaDto) {
    try{
      const prostituta=this.prostitutaRepository.create(createProstitutaDto);
      await this.prostitutaRepository.save(prostituta);
      return prostituta;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const prostitutas = await this.prostitutaRepository.find({});
    return prostitutas;
  }

  async findOne(id: String) {
    const prostituta = await this.prostitutaRepository.findOneBy({id:id});
    if(!prostituta){
      throw new NotFoundException(`Prostituta no encontrada`)
    }
    return prostituta;
  }

  async update(id: String, updateProstitutaDto: UpdateProstitutaDto) {
    const prostituta = await this.prostitutaRepository.preload({
      id:id,...updateProstitutaDto
    })
    if(!prostituta) {
      throw new NotFoundException(`Prostituta no encontrada`);
    }
    await this.prostitutaRepository.save(prostituta);
    return prostituta;
  }

  async remove(id: String) {
    const prostituta = await this.findOne(id);
    this.prostitutaRepository.delete(prostituta);
    return prostituta;
  }
}
