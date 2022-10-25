import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './dog.entities';
import { CreateDogDto } from './dto/dog-create.dto';
import { UpdateDogDto } from './dto/dog-update.dto';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private dogRepository: Repository<Dog>,
  ) {
  }

  async create(createDogDto: CreateDogDto) {
    createDogDto.createTime = createDogDto.updateTime = new Date();
    createDogDto.isDelete = false;

    console.log('33333333333333333', createDogDto);

    return await this.dogRepository.save(createDogDto);
  }

  async findAll() {
    return await this.dogRepository.find();
  }

  async findOne(id: number) {
    return await this.dogRepository.findByIds([id]);
  }

  async update(id: number, updateDogDto: UpdateDogDto) {
    updateDogDto.updateTime = new Date();
    return await this.dogRepository.update(id, updateDogDto);
  }

  async remove(id: number) {
    return await this.dogRepository.delete(id);
  }
}
