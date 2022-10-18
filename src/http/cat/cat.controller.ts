import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/cat-create.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly CatS: CatService) {
  }

  @Post()
  async create(@Body() Dto: CreateCatDto) {
    return this.CatS.create(Dto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.CatS.findAll();
  }

}
