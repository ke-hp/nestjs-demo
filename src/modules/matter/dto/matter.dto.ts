import { IsString, IsArray, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class Node {
  @ApiProperty({ description: '审批节点名称', required: true })
  @IsString()
  name: string;

  @IsInt()
  @ApiProperty({ description: '审批天数', required: true })
  days: number;

  @IsArray()
  @ApiProperty({ description: '部门', required: true })
  sector: [string];

  @IsString()
  @ApiProperty({ description: '节点编码', required: true })
  code: string;

  @IsInt()
  @ApiProperty({ description: '相邻间隔天数', required: true })
  intervalDays: number;
}

export class MatterDto {
  @IsString()
  @ApiProperty({ description: '事项名称', required: true })
  name: string;

  @IsArray()
  @ApiProperty({
    type: [Node],
  })
  @Type(() => Node)
  nodes: Node[];
}

