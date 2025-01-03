import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  @ApiProperty({
    example: 'GUID',
    required: false,
  })
  id: string;
  @ApiProperty({
    example: '0xade899a8d9a80e8a09da908ea8d0a890e80',
    required: false,
  })
  userAddress: string;
  @ApiProperty({
    example: 'otel_fxs',
    required: false,
  })
  symbol: string;
  @ApiProperty({
    example: 10,
    required: false,
  })
  quantity: number;
  @ApiProperty({
    example: 1000,
    required: false,
  })
  price: number;
  @ApiProperty({
    example: 'buy',
    required: false,
  })
  side: 'buy' | 'sell';
  @ApiProperty({
    example: 'pending',
    required: false,
  })
  status: 'pending' | 'completed' | 'canceled';
  @ApiProperty({
    example: '2021-09-22T16:00:00.000Z',
    required: false,
  })
  createdAt: Date;
  @ApiProperty({
    example: '2021-09-22T16:00:00.000Z',
    required: false,
  })
  updatedAt: Date;

  constructor(data: Partial<OrderDTO>) {
      Object.assign(this, data);
  }
}