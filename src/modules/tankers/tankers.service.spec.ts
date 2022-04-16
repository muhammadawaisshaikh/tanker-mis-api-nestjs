import { Test, TestingModule } from '@nestjs/testing';
import { TankersService } from './tankers.service';

describe('TankersService', () => {
  let service: TankersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TankersService],
    }).compile();

    service = module.get<TankersService>(TankersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
