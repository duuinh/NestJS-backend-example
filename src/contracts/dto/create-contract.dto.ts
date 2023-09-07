import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateContractDto {
  @ApiProperty()
  isPublic: boolean;

  @ApiProperty()
  participants: Prisma.ParticipantCreateInput;

  @ApiProperty({ required: false, default: [] })
  figures?: string[];

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
  expiredDate: Date;

  @ApiProperty({ required: false, default: null })
  location?: Prisma.LocationCreateInput;
}
