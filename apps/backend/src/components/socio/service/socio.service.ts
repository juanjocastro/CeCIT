import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socio } from '../socio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocioService {
  constructor(@InjectRepository(Socio) private socioRepo: Repository<Socio>) {}
  async createSocio() {}
}
