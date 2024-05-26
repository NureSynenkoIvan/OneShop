import { Test, TestingModule } from '@nestjs/testing';
import { OrderProductQuantityService } from './order-product-quantity.service';

describe('OrderProductQuantityService', () => {
  let service: OrderProductQuantityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderProductQuantityService],
    }).compile();

    service = module.get<OrderProductQuantityService>(OrderProductQuantityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
