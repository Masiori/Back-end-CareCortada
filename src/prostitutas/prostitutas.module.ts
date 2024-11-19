import { Module } from '@nestjs/common';
import { ProstitutasService } from './prostitutas.service';
import { ProstitutasController } from './prostitutas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prostituta } from './entities/prostituta.entity';

@Module({
  controllers: [ProstitutasController],
  providers: [ProstitutasService],
  imports: [TypeOrmModule.forFeature([Prostituta])],
})
export class ProstitutasModule {}
