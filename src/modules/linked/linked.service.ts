import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { Linked, LinkedDocument } from './linked.schema';
import { LinkedDto } from './dto/linked.dto';

@Injectable()
export class LinkedService {
  constructor(
    @InjectModel(Linked.name)
    private linkedM: PaginateModel<LinkedDocument>,
  ) {
  }

  async create(createCompanyDto: LinkedDto): Promise<Linked> {
    const createdCat = new this.linkedM(createCompanyDto);
    return createdCat.save();
  }

  async update(id: string, updateLinkedDto: LinkedDto): Promise<Linked> {
    return await this.linkedM.findOneAndUpdate({ _id: id }, updateLinkedDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<any> {
    return await this.linkedM.deleteOne({ _id: id });
  }

  async paginate(qurey: any, options: any = {}) {
    return this.linkedM.paginate(qurey, options);
  }
}
