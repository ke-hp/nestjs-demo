import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';


@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async signIn(name: string, pwd: string) {

   let userInfo = await this.userModel.findOne({name: name });
   if(userInfo){
     return null
   }

   userInfo = await this.userModel.findOneAndUpdate({name:name},{
     name:name,

   })

  }


  login(name: string, pwd: string) {

  }
}
