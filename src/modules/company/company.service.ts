import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Inject } from '@nestjs/common';

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

  async updateById(id: string, setDate: any): Promise<Company> {
    return this.companyM.findOneAndUpdate({ _id: id }, { $set: setDate });
  }

  async deleteById(id: string): Promise<any> {
    return this.companyM.deleteOne({ _id: id });
  }

  async paginate(qurey: any, options: any = {}) {
    return this.companyM.paginate(qurey, options);
  }

  async init(arr: any) {
    arr.forEach(async (e) => {
      const info = await this.companyM.findOne({ name: e[1] });
      if (!info) {
        this.companyM.create({
          name: e[1], // 企业名称
          park: e[2] || '', // 园区
          regional: e[3] || '', // 分区
          industry: e[4] || '', // 所属行业
          operatingCondition: e[5] || '', // 经营状况
          emergencyContact: e[6] || '', // 应急联系人
          emergencyPhone: e[7] || '', // 应急手机号
          EPContact: e[8] || '', // 环保联系人
          EPPhone: e[9] || '', // 环保手机号
          companyCode: e[10] || '', // 企业编号
          priority: e[11] || '', // 重点企业
          province: e[12] || '', // 省级行政区
          shi: e[13] || '', // 市
          xian: e[14] || '', // 县
          type: e[15] || '', // 企业类型
          productionTime: e[16] || '', // 投产时间
          registrationTime: e[17] || '', // 成立时间
          ein: e[18] || '', // 税号
          legalPerson: e[19] || '', // 法人
          creditCode: e[20] || '', // 信用代码
          registeredCapital: e[21] || '', // 注册资金
          overview: e[22] || '', // 概况
          CompanyNum: +e[23] || 0, // 企业人数
          address: e[24] || '', // 企业地址
          centerLongitude: e[25] || '', // 中心经度
          centralLatitude: e[26] || '', // 中心纬度
        });
      }
    });
  }
}
