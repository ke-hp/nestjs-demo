import { Module } from '@nestjs/common';
import { LinkedController } from './linked.controller';
import { LinkedService } from './linked.service';
import { Linked, LinkedSchema } from './linked.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Linked.name, schema: LinkedSchema }])],
  controllers: [LinkedController],
  providers: [LinkedService],
})

export class LinkedModule {
}
