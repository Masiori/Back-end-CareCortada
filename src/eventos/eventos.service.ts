import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>
  ){}

  async create(createEventoDto: CreateEventoDto) {
    try{
      const evento=this.eventoRepository.create(createEventoDto);
      await this.eventoRepository.save(evento);
      return evento;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const eventos = await this.eventoRepository.find({});
    return eventos;
  }

  async findOne(id: String) {
    const evento = await this.eventoRepository.findOneBy({id:id});
    if(!evento){
      throw new NotFoundException(`Evento no encontrado`)
    }
    return evento;
  }

  async update(id: String, updateEventoDto: UpdateEventoDto) {
    const evento = await this.eventoRepository.preload({
      id:id,...updateEventoDto
    })
    if(!evento) {
      throw new NotFoundException(`Evento no encontrado`);
    }
    await this.eventoRepository.save(evento);
    return evento;
  }

  async remove(id: String) {
    const evento = await this.findOne(id);
    this.eventoRepository.delete(evento);
    return evento;
  }
}
