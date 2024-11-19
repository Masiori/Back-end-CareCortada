import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaquillajeService } from './maquillaje.service';
import { CreateMaquillajeDto } from './dto/create-maquillaje.dto';
import { UpdateMaquillajeDto } from './dto/update-maquillaje.dto';

@Controller('maquillaje')
export class MaquillajeController {
  constructor(private readonly maquillajeService: MaquillajeService) {}

  @Post()
  create(@Body() createMaquillajeDto: CreateMaquillajeDto) {
    return this.maquillajeService.create(createMaquillajeDto);
  }

  @Get()
  findAll() {
    return this.maquillajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maquillajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaquillajeDto: UpdateMaquillajeDto) {
    return this.maquillajeService.update(+id, updateMaquillajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maquillajeService.remove(+id);
  }
}
