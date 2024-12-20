import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ModelosModule } from './modelos/modelos.module';
import { Modelo } from './modelos/entities/modelo.entity';
import { SicariosModule } from './sicarios/sicarios.module';
import { ProstitutasModule } from './prostitutas/prostitutas.module';
import { MaquillajeModule } from './maquillaje/maquillaje.module';
import { DrogasModule } from './drogas/drogas.module';
import { PhotosModule } from './photos/photos.module';
import { EventosModule } from './eventos/eventos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true
 }), ModelosModule, SicariosModule, ProstitutasModule, MaquillajeModule, DrogasModule, PhotosModule, EventosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
