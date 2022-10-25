import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as nuid from 'nuid';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // 配置文件上传后的文件夹路径
        destination: `./public/uploads/`,
        filename: (req, file, cb) => {
          // 在此处自定义保存后的文件名称

          console.log('file.mimetype', file.mimetype);
          const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;

          return cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [
    FileController,
  ],
  providers: [],
})
export class FileModule {
}

