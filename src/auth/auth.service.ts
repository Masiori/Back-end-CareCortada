import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateAuthDto) {
    try{
      const user=this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      return user;
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const users = await this.userRepository.find({});
    return users;
  }

  async findOne(id: String) {
    const user = await this.userRepository.findOneBy({id:id});
    if(!user){
      throw new NotFoundException(`Usuario no encontrado`)
    }
    return user;
  }

  async update(id: String, updateUserDto: UpdateAuthDto) {
    const user = await this.userRepository.preload({
      id:id,...updateUserDto
    })
    if(!user) {
      throw new NotFoundException(`Usuario no encontrado`);
    }
    await this.userRepository.save(user);
    return user;
  }

  async remove(id: String) {
    const user = await this.findOne(id);
    this.userRepository.delete(user);
    return user;
  }
}
