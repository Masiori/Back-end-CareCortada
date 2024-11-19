import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSicarioDto } from './dto/create-sicario.dto';
import { UpdateSicarioDto } from './dto/update-sicario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sicario } from './entities/sicario.entity';

@Injectable()
export class SicariosService {
  constructor(
    @InjectRepository(Sicario)
    private readonly sicarioRepository : Repository<Sicario>
  ){}

  async create(createSicarioDto: CreateSicarioDto) {
    try{
      const sicario = this.sicarioRepository.create(createSicarioDto);
      await this.sicarioRepository.save(sicario);
      return sicario;
    }catch(e){
      throw new InternalServerErrorException(`Sicario ya existe`);
    }
  }

  async findAll() {
    const sicarios = await this.sicarioRepository.find({});
    return sicarios;
  }

  async findOne(id: String) {
    const sicario = await this.sicarioRepository.findOneBy({id:id});
    if(!sicario){
      throw new NotFoundException(`Sicario no encontrado`);
    }
    return sicario;
  }

  async update(id: String, updateSicarioDto: UpdateSicarioDto) {
    const sicario = await this.sicarioRepository.preload({
      id:id,...updateSicarioDto
    })
    if(!sicario){
      throw new NotFoundException(`Sicario no encontrado`);
    }
    await this.sicarioRepository.save(sicario);
    return sicario;
  }

  async remove(id: String) {
    const sicario = await this.findOne(id);
    this.sicarioRepository.delete(sicario);
    return sicario;
  }
}
