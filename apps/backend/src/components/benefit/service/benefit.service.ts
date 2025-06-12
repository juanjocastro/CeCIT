import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Benefit } from '../benefit.entity';
import {CreateBenefitDto} from '../dto/CreateBenefit.dto';

@Injectable()
export class BeneficitService {
    constructor (@InjectRepository(Benefit) private benefitRepo: Repository<Benefit>) {}

    async createBenefit(newBenefit: CreateBenefitDto){
        const benefit = this.benefitRepo.create(newBenefit);
        return await this.benefitRepo.save(benefit);
    }
}
