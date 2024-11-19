import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProstitutasService } from './prostitutas.service';
import { CreateProstitutaDto } from './dto/create-prostituta.dto';
import { UpdateProstitutaDto } from './dto/update-prostituta.dto';

@Controller('prostitutas')
export class ProstitutasController {
  constructor(private readonly prostitutasService: ProstitutasService) {}

  @Post()
  create(@Body() createProstitutaDto: CreateProstitutaDto) {
    return this.prostitutasService.create(createProstitutaDto);
  }

  @Get()
  findAll() {
    return this.prostitutasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prostitutasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProstitutaDto: UpdateProstitutaDto) {
    return this.prostitutasService.update(id, updateProstitutaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prostitutasService.remove(id);
  }
}
