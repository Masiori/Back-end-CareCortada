import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [TypeOrmModule.forFeature([Photo])]
})
export class PhotosModule {}
