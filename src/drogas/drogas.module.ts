import { Module } from '@nestjs/common';
import { DrogasService } from './drogas.service';
import { DrogasController } from './drogas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drogas } from './entities/drogas.entity';

@Module({
  controllers: [DrogasController],
  providers: [DrogasService],
  imports: [TypeOrmModule.forFeature([Drogas])],
})
export class DrogasModule {}
