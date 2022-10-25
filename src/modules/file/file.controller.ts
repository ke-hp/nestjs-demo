import { Controller, UploadedFile, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('文件')
@Controller('file')
export class FileController {

  @Post('upload')
  @ApiOperation({ summary: '上传' })
  @UseInterceptors(FileInterceptor('file'))
  UploadedFile(@UploadedFile() file) {
    // 这里的 file 已经是保存后的文件信息了，在此处做数据库处理，或者直接返回保存后的文件信息
    return file;
  }
}
