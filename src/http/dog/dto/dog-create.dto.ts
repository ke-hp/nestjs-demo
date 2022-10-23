export class CreateDogDto {
  name: string; // 名字
  age: number; // 年龄
  breed: string; // 品种
  updateTime: Date; // 更新时间
  createTime: Date;
  isDelete: boolean;
}
