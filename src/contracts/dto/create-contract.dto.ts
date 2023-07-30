import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateContractDto {
  @ApiProperty()
  isPublic: boolean;

  @ApiProperty({ required: false, default: [] })
  pool?: string[];

  @ApiProperty({ required: false, default: [] })
  ads?: string[];

  @ApiProperty()
  title: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ required: false, default: 'SEK' })
  currency: string;

  @ApiProperty()
  expired_date: Date;

  @ApiProperty()
  location: string;

  @ApiProperty({ required: false, default: null })
  details?: Prisma.ContractDetailsCreateInput;
}
