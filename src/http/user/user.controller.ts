import { Controller, Get, Post, Query, Body, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';
import { LoginDto } from './dto/user.dto.login';

@Controller('user')
export class UserController {
  constructor(private readonly UserS: UserService) {
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: LoginDto) {
    return this.UserS.signIn(signInDto.name, signInDto.pwd);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Body() loginDto: LoginDto) {
    return this.UserS.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() req) {
    return await this.UserS.getInfoByName(req.user.name);
  }

}
