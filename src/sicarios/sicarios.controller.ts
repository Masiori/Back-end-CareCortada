import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SicariosService } from './sicarios.service';
import { CreateSicarioDto } from './dto/create-sicario.dto';
import { UpdateSicarioDto } from './dto/update-sicario.dto';

@Controller('sicarios')
export class SicariosController {
  constructor(private readonly sicariosService: SicariosService) {}

  @Post()
  create(@Body() createSicarioDto: CreateSicarioDto) {
    return this.sicariosService.create(createSicarioDto);
  }

  @Get()
  findAll() {
    return this.sicariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sicariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSicarioDto: UpdateSicarioDto) {
    return this.sicariosService.update(+id, updateSicarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sicariosService.remove(+id);
  }
}
