import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { OrderDto } from './order.dto';

export class CreateOrderDto extends OrderDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   orderId: string
}