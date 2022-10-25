import { IsString, IsNotEmpty, Length, Min, Max } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: '用户名不为空' })
  @Length(4, 20, { message: '用户名的长度不能小于4不能大于20' })
  readonly username: string;

  @IsNotEmpty({ message: '密码不为空' })
  @Length(4, 20, { message: '密码的长度不能小于4不能大于20' })
  readonly password: string;
}
