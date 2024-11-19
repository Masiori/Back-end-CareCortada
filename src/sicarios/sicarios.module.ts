import { Module } from '@nestjs/common';
import { SicariosService } from './sicarios.service';
import { SicariosController } from './sicarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sicario } from './entities/sicario.entity';

@Module({
  controllers: [SicariosController],
  providers: [SicariosService],
  imports: [TypeOrmModule.forFeature([Sicario])],
})
export class SicariosModule {}
