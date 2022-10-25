import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { Company, CompanyDocument } from './company.schema';
import { CreateCompanyDto } from './dto/company-create.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyM: PaginateModel<CompanyDocument>,
  ) {
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCat = new this.companyM(createCompanyDto);
    return createdCat.save();
  }

  async paginate(condition: string, page: number = 0, limit: number = 20) {
    return this.companyM.paginate(
      { fieldName: condition },
      {
        sort: { createdAt: -1 },
        limit,
        page,
      },
    );
  }
}
