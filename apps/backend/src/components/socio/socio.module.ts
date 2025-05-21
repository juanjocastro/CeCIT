import { Module } from '@nestjs/common';
import { SocioController } from './controller/socio.controller';
import { SocioService } from './service/socio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Socio } from './socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Socio])],
  controllers: [SocioController],
  providers: [SocioService],
})
export class SocioModule {}
