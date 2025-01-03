import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { GenericResponseDto } from 'src/utils/generic-dto/GenericResponseDto';
import { OrderMapper as Mapper } from '../mappers/order.mapper';
import { OrderDTO } from '../dtos/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) { }

  async getOrders(): Promise<GenericResponseDto<OrderDTO[]>> {
    const orders = await this.orderRepository.find();
    return new GenericResponseDto<OrderDTO[]>(
      true,
      orders.map(c => Mapper.mapOrderToDTO(c))
    );
  }

  async executeOrder(
    orderDto: OrderDTO,
  ): Promise<GenericResponseDto<OrderDTO>> {
    const orderEntity = this.orderRepository.create(Mapper.mapDTOToOrder(orderDto));
    return new GenericResponseDto<OrderDTO>(
      true,
      Mapper.mapOrderToDTO(orderEntity),
    );
  }
}
