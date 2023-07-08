import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, default: true })
  isActive?: boolean = true;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  birthdate: Date;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  address: string;
}
