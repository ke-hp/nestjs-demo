import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
// import { Cat } from './interfaces/.interface';
import { LoginDto } from './dto/user.dto.login';

@Controller('user')
export class CatController {
  constructor(private readonly UserS: UserService) {
  }

  @Post('login')
  async create(@Body() loginDto: LoginDto) {
    return this.UserS.login(loginDto);
  }

  //
  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.CatS.findAll();
  // }

}
