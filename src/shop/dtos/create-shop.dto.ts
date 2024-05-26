import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ShopDto } from './shop.dto';

export class CreateShopDto extends ShopDto {
   @ApiProperty({
      type: String,
   })
   @IsUUID()
   shopId: string
}