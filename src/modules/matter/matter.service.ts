import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { Matter, MatterDocument } from './matter.schema';
import { MatterDto } from './dto/matter.dto';

@Injectable()
export class MatterService {
  constructor(
    @InjectModel(Matter.name)
    private MatterM: PaginateModel<MatterDocument>,
  ) {
  }

  async create(createCompanyDto: MatterDto): Promise<Matter> {
    const createdCat = new this.MatterM(createCompanyDto);
    return createdCat.save();
  }

  async update(id: string, updateLinkedDto: MatterDto): Promise<Matter> {
    return await this.MatterM.findOneAndUpdate({ _id: id }, updateLinkedDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<any> {
    return await this.MatterM.deleteOne({ _id: id });
  }

  async paginate(qurey: any, options: any = {}) {
    return this.MatterM.paginate(qurey, options);
  }
}
