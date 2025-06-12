import { Test, TestingModule } from '@nestjs/testing';
import { BeneficioController } from './benefit.controller';

describe('BeneficioController', () => {
  let controller: BeneficioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficioController],
    }).compile();

    controller = module.get<BeneficioController>(BeneficioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
