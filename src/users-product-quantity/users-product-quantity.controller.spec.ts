import { Test, TestingModule } from '@nestjs/testing';
import { UsersProductQuantityController } from './users-product-quantity.controller';

describe('UsersProductQuantityController', () => {
  let controller: UsersProductQuantityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersProductQuantityController],
    }).compile();

    controller = module.get<UsersProductQuantityController>(UsersProductQuantityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
