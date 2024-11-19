import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDrogasDto } from './dto/create-drogas.dto';
import { UpdateDrogasDto } from './dto/update-drogas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Drogas } from './entities/drogas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DrogasService {
  constructor(
    @InjectRepository(Drogas)
    private readonly drogaRepository: Repository<Drogas>
  ){}

  async create(createDrogaDto: CreateDrogasDto) {
    try{
      const droga=this.drogaRepository.create(createDrogaDto);
      await this.drogaRepository.save(droga);
      return droga;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const drogas = await this.drogaRepository.find({});
    return drogas;
  }

  async findOne(id: String) {
    const droga = await this.drogaRepository.findOneBy({id:id});
    if(!droga){
      throw new NotFoundException(`Droga no encontrada`)
    }
    return droga;
  }

  async update(id: String, updateDrogaDto: UpdateDrogasDto) {
    const droga = await this.drogaRepository.preload({
      id:id,...updateDrogaDto
    })
    if(!droga) {
      throw new NotFoundException(`Droga no encontrada`);
    }
    await this.drogaRepository.save(droga);
    return droga;
  }

  async remove(id: String) {
    const droga = await this.findOne(id);
    this.drogaRepository.delete(droga);
    return droga;
  }
}
