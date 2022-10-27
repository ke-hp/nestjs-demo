import { Module } from '@nestjs/common';
import { MatterController } from './matter.controller';
import { MatterService } from './matter.service';
import { Matter, MatterSchema } from './matter.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Matter.name, schema: MatterSchema }])],
  controllers: [MatterController],
  providers: [MatterService],
})

export class MatterModule {
}
