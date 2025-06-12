import { Body, Controller, Post } from '@nestjs/common';
import type { CreateBenefitDto } from '../dto/CreateBenefit.dto';
import { BeneficitService } from '../service/benefit.service';

@Controller('beneficio')
export class BeneficioController {
    constructor (private readonly benefitService: BeneficitService) {}

    @Post('')
    async createBenefit(@Body() body: CreateBenefitDto){
        console.log("creating benefit...")
        return await this.benefitService.createBenefit(body);
    }
}
