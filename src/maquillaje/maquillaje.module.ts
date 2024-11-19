import { Module } from '@nestjs/common';
import { MaquillajeService } from './maquillaje.service';
import { MaquillajeController } from './maquillaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maquillaje } from './entities/maquillaje.entity';

@Module({
  controllers: [MaquillajeController],
  providers: [MaquillajeService],
  imports: [TypeOrmModule.forFeature([Maquillaje])],
})
export class MaquillajeModule {}
