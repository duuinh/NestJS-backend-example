import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  email?: string;

  @ApiProperty()
  isActive?: boolean;

  @ApiProperty()
  phoneNumber?: string;

  @ApiProperty()
  address?: string;
}
