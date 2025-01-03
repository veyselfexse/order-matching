import { ApiProperty } from '@nestjs/swagger';

export class GenericResponseDto<T> {
  constructor(success: boolean = true, data?: T, message?: string) {
    this.success = success;
    this.data = data;
    this.messsage = message;
  }

  data?: T;
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  messsage?: string;
}
