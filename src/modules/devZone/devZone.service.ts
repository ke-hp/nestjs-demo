import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { DevZone, DevZoneDocument } from './devZone.schema';
import { DevZoneDto } from './dto/devZone.dto';

@Injectable()
export class DevZoneService {
  constructor(
    @InjectModel(DevZone.name)
    private linkedM: PaginateModel<DevZoneDocument>,
  ) {
  }

  async get(): Promise<DevZone> {
    return this.linkedM.findOne({});
  }

  async update(updateDevZoneDto: DevZoneDto): Promise<DevZone> {
    return await this.linkedM.findOneAndUpdate({}, updateDevZoneDto, {
      new: true,
      upsert: true,
    });
  }
}
