import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../components/user/user.module';
import { DataSourceModule } from '../components/datasource/datasource.module';
import { SocioModule } from '../components/socio/socio.module';

@Module({
  imports: [UserModule, DataSourceModule, SocioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
