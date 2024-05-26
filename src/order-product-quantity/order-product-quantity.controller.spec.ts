import { Test, TestingModule } from '@nestjs/testing';
import { OrderProductQuantityController } from './order-product-quantity.controller';

describe('OrderProductQuantityController', () => {
  let controller: OrderProductQuantityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderProductQuantityController],
    }).compile();

    controller = module.get<OrderProductQuantityController>(OrderProductQuantityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
