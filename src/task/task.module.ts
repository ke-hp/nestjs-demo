import { Module, forwardRef } from '@nestjs/common';

import { TaskService } from './task.service';
import { CompanyModule } from '../modules/company/company.module';
import { CompanyService } from '../modules/company/company.service';
import { Company, CompanySchema } from '../modules/company/company.schema';
import { MongooseModule } from '@nestjs/mongoose';

//  MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])

@Module({
  imports: [CompanyModule],
  providers: [TaskService],
})

export class TaskModule {
}
