import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

import { DogService } from './dog.service';
import { CreateDogDto } from './dto/dog-create.dto';
import { UpdateDogDto } from './dto/dog-update.dto';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {
  }

  @ApiQuery({ name: 'name', required: true })
  @ApiQuery({ name: 'age' })
  @ApiResponse({
    status: 200,
    description: 'get ...',
    type: CreateDogDto,
  })
  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    return await this.dogService.create(createDogDto);
  }

  @Get()
  async findAll() {
    return await this.dogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.dogService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return await this.dogService.update(+id, updateDogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.dogService.remove(+id);
  }

}
