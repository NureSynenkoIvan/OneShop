import { Test, TestingModule } from '@nestjs/testing';
import { ProductShopController } from './product-shop.controller';

describe('ProductShopController', () => {
  let controller: ProductShopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductShopController],
    }).compile();

    controller = module.get<ProductShopController>(ProductShopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
