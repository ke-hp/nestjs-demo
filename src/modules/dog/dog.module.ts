import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dog.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {
}
