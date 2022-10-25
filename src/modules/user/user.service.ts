import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Cat } from '../cat/cat.schema';

import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {

  }

  async signIn(name: string, pwd: string): Promise<User> | null {
    let userInfo = await this.userModel.findOne({ name: name });
    if (userInfo) {
      return null;
    }

    await this.userModel.findOneAndUpdate(
      { name: name },
      {
        name: name,
        pwdHash: crypto.createHash('md5').update(pwd).digest('hex'),
      },
      { new: true, upsert: true },
    );
  }

  async login(user: any): Promise<any> {
    const payload = { name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(name: string, pwd: string): Promise<any> {
    let userInfo = await this.userModel.findOne({ name: name }).exec();
    if (!userInfo) {
      return null;
    }
    const pwdHast = crypto.createHash('md5').update(pwd).digest('hex');
    if (pwdHast != userInfo.passwordHash) {
      return null;
    }
    delete userInfo.passwordHash;
    return userInfo;
  }


  async getInfoByName(name: string): Promise<User> {
    return this.userModel.findOne({ name }, {}, { pwdHash: -1 }).exec();
  }
we}
