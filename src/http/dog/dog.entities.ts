import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dog {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @Column()
  createTime: Date;

  @Column()
  updateTime: Date;

  @Column()
  isDelete: boolean;
}
