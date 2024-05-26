import { Test, TestingModule } from '@nestjs/testing';
import { UsersProductQuantityService } from './users-product-quantity.service';

describe('UsersProductQuantityService', () => {
  let service: UsersProductQuantityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersProductQuantityService],
    }).compile();

    service = module.get<UsersProductQuantityService>(UsersProductQuantityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
