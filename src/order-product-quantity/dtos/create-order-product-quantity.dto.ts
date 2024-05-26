import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { OrderProductQuantityDto } from './order-product-quantity.dto';


export class CreateOrderProductQuantityDto extends OrderProductQuantityDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   orderProductQuantityId: string
}