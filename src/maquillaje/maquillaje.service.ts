import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMaquillajeDto } from './dto/create-maquillaje.dto';
import { UpdateMaquillajeDto } from './dto/update-maquillaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Maquillaje } from './entities/maquillaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaquillajeService {
  constructor(
    @InjectRepository(Maquillaje)
    private readonly maquillajeRepository: Repository<Maquillaje>
  ){}

  async create(createMaquillajeDto: CreateMaquillajeDto) {
    try{
      const maquillaje=this.maquillajeRepository.create(createMaquillajeDto);
      await this.maquillajeRepository.save(maquillaje);
      return maquillaje;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const maquillajes = await this.maquillajeRepository.find({});
    return maquillajes;
  }

  async findOne(id: String) {
    const maquillaje = await this.maquillajeRepository.findOneBy({id:id});
    if(!maquillaje){
      throw new NotFoundException(`Maquillaje no encontrado`)
    }
    return maquillaje;
  }

  async update(id: String, updateMaquillajeDto: UpdateMaquillajeDto) {
    const maquillaje = await this.maquillajeRepository.preload({
      id:id,...updateMaquillajeDto
    })
    if(!maquillaje) {
      throw new NotFoundException(`Maquillaje no encontrada`);
    }
    await this.maquillajeRepository.save(maquillaje);
    return maquillaje;
  }

  async remove(id: String) {
    const maquillaje = await this.findOne(id);
    this.maquillajeRepository.delete(maquillaje);
    return maquillaje;
  }
}
