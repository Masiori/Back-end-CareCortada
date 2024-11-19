import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrogasService } from './drogas.service';
import { CreateDrogasDto } from './dto/create-drogas.dto';
import { UpdateDrogasDto } from './dto/update-drogas.dto';

@Controller('drogas')
export class DrogasController {
  constructor(private readonly drogasService: DrogasService) {}

  @Post()
  create(@Body() createDrogasDto: CreateDrogasDto) {
    return this.drogasService.create(createDrogasDto);
  }

  @Get()
  findAll() {
    return this.drogasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drogasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrogasDto: UpdateDrogasDto) {
    return this.drogasService.update(id, updateDrogasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drogasService.remove(id);
  }
}
