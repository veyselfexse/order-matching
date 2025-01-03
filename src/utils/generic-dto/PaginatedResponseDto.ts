import { ApiProperty } from '@nestjs/swagger';
import { GenericResponseDto } from './GenericResponseDto';

export class PaginatedResponseDto<T> extends GenericResponseDto<T> {
  @ApiProperty()
  totalCount: number;
  @ApiProperty()
  offset: number;
  @ApiProperty()
  limit: number;
}
