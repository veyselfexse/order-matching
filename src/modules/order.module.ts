import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Order } from 'src/entities/order.entity';
import { OrderService } from 'src/services/order.service';
import { OrderController } from 'src/controllers/order.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [
    OrderService,
    ConfigService,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
