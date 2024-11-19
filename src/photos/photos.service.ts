import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>
  ){}

  async create(createPhotoDto: CreatePhotoDto) {
    try{
      const photo=this.photoRepository.create(createPhotoDto);
      await this.photoRepository.save(photo);
      return photo;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const photos = await this.photoRepository.find({});
    return photos;
  }

  async findOne(nombre: String) {
    const photo = await this.photoRepository.findOneBy({nombre:nombre});
    if(!photo){
      throw new NotFoundException(`Foto no encontrada`)
    }
    return photo;
  }

  async update(nombre: String, updatePhotoDto: UpdatePhotoDto) {
    const photo = await this.photoRepository.preload({
      nombre:nombre,...updatePhotoDto
    })
    if(!photo) {
      throw new NotFoundException(`Modelo no encontrada`);
    }
    await this.photoRepository.save(photo);
    return photo;
  }

  async remove(id: String) {
    const photo = await this.findOne(id);
    this.photoRepository.delete(photo);
    return photo;
  }
}
