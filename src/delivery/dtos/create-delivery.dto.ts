import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { DeliveryDto } from './delivery.dto';

export class CreateDeliveryDto extends DeliveryDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   deliveryId: string
}