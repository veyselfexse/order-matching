import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import {
  ApiOkGenericListResponse,
  ApiOkGenericResponse,
} from 'src/utils/generic-dto/ApiGenericResponse';
import { GenericResponseDto } from 'src/utils/generic-dto/GenericResponseDto';
import { OrderDTO } from '../dtos/order.dto';
import { OrderService } from 'src/services/order.service';

@ApiTags('Order')
@ApiResponse({ status: 401, description: 'Unauthorized.' })
@ApiResponse({ status: 403, description: 'Forbidden.' })
@ApiResponse({ status: 500, description: 'Internal server error.' })
@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get('/')
  @ApiOperation({ description: '' })
  @ApiOkGenericListResponse(OrderDTO)
  getOrders(): Promise<GenericResponseDto<OrderDTO[]>> {
    return this.orderService.getOrders();
  }


  @HttpCode(200)
  @Post('/')
  @ApiOperation({ description: 'Execute a order.' })
  @ApiOkGenericResponse(OrderDTO)
  executeOrder(
    @Body() orderDTO: OrderDTO,
  ): Promise<GenericResponseDto<OrderDTO>> {
    return this.orderService.executeOrder(orderDTO);
  }
}
