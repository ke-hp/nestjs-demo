import { IsString, IsOptional, Min, Max } from 'class-validator';

export class LoginDto {
  @IsString({ message: '用户名要求为字符串' })
  @IsOptional({ message: '用户名必填' })
  @Min(4, { message: '用户名最小长度为4' })
  @Max(20, { message: '用户名最小长度为20' })
  readonly username: string;

  @IsString({ message: '密码要求为字符串' })
  @IsOptional({ message: '密码必填' })
  @Min(4, { message: '密码最小长度为4' })
  @Max(20, { message: '密码最小长度为20' })
  readonly password: string;
}
