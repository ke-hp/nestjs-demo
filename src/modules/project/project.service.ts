import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { Project, ProjectDocument } from './project.schema';
import { ProjiectDto } from './dto/projiect.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private linkedM: PaginateModel<ProjectDocument>,
  ) {
  }

  async create(createCompanyDto: ProjiectDto): Promise<Project> {
    const createdCat = new this.linkedM(createCompanyDto);
    return createdCat.save();
  }

  async update(id: string, updateLinkedDto: ProjiectDto): Promise<Project> {
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
