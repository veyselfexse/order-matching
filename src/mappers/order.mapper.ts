import { OrderDTO } from "src/dtos/order.dto";
import { Order } from "src/entities/order.entity";


export class OrderMapper {
  static mapOrderToDTO(order: Order): OrderDTO {
    return {
        id: order.Id,
        userAddress: order.UserAddress,
        quantity: order.Quantity,
        symbol: order.Symbol,
        price: order.Price,
        side: order.Side as "buy" | "sell",
        status: order.Status as "pending" | "completed" | "canceled",
        createdAt: order.CreatedAt,
        updatedAt: order.UpdatedAt,
    };
}

static mapDTOToOrder(orderDTO: OrderDTO): Order {
    return {
        Id: orderDTO.id,
        UserAddress: orderDTO.userAddress,
        Symbol: orderDTO.symbol,
        Quantity: orderDTO.quantity,
        Price: orderDTO.price,
        Status: orderDTO.status,
        Side: orderDTO.side,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
    };
}
}
