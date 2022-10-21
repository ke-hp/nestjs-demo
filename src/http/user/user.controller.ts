import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';
import { LoginDto } from './dto/user.dto.login';

@Controller('user')
export class UserController {
  constructor(private readonly UserS: UserService) {}

  @Post('sign-in')
  async signIn(@Body() signInDto: LoginDto) {
    return this.UserS.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.UserS.login(req.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getUserInfo(@Request() req) {
    return await this.UserS.getInfoByName(req.user.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('param-verify')
  async mes(@Body() loginDto: LoginDto) {
    return { test: 'test' };
  }
}
