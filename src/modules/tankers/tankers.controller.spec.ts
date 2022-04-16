import { Test, TestingModule } from '@nestjs/testing';
import { TankersController } from './tankers.controller';
import { TankersService } from './tankers.service';

describe('TankersController', () => {
  let controller: TankersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TankersController],
      providers: [TankersService],
    }).compile();

    controller = module.get<TankersController>(TankersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
