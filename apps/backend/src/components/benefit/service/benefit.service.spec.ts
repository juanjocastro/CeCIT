import { Test, TestingModule } from '@nestjs/testing';
import { BeneficioService } from './benefit.service';

describe('BeneficioService', () => {
  let service: BeneficioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficioService],
    }).compile();

    service = module.get<BeneficioService>(BeneficioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
