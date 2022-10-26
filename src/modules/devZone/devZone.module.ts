import { Module } from '@nestjs/common';
import { DevZoneController } from './devZone.controller';
import { DevZoneService } from './devZone.service';
import { DevZone, DevZoneSchema } from './devZone.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: DevZone.name, schema: DevZoneSchema }])],
  controllers: [DevZoneController],
  providers: [DevZoneService],
})

export class DevZoneModule {
}
