import { Controller, Post } from '@nestjs/common';
import { SocioService } from '../service/socio.service';

@Controller('socio')
export class SocioController {
  constructor(private readonly socioService: SocioService) {}
  @Post('')
  async crearSocio() {
    console.log('Creando_socio');
  }
}
