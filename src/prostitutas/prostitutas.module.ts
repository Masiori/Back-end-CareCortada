import { Module } from '@nestjs/common';
import { ProstitutasService } from './prostitutas.service';
import { ProstitutasController } from './prostitutas.controller';

@Module({
  controllers: [ProstitutasController],
  providers: [ProstitutasService],
})
export class ProstitutasModule {}
