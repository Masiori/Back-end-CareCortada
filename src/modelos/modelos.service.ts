import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modelo } from './entities/modelo.entity';

@Injectable()
export class ModelosService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modeloRepository: Repository<Modelo>
  ){}

  async create(createModeloDto: CreateModeloDto) {
    try{
      const modelo=this.modeloRepository.create(createModeloDto);
      await this.modeloRepository.save(modelo);
      return modelo;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const modelos = await this.modeloRepository.find({});
    return modelos;
  }

  async findOne(id: String) {
    const modelo = await this.modeloRepository.findOneBy({id:id});
    if(!modelo){
      throw new NotFoundException(`Modelo no encontrado`)
    }
    return modelo;
  }

  async update(id: String, updateModeloDto: UpdateModeloDto) {
    const modelo = await this.modeloRepository.preload({
      id:id,...updateModeloDto
    })
    if(!modelo) {
      throw new NotFoundException(`Modelo no encontrada`);
    }
    await this.modeloRepository.save(modelo);
    return modelo;
  }

  async remove(id: String) {
    const modelo = await this.findOne(id);
    this.modeloRepository.delete(modelo);
    return modelo;
  }
}
