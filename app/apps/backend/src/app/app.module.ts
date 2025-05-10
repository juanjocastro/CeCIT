import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../components/user/user.module';
import { DataSourceModule } from '../components/datasource/datasource.module';

@Module({
  imports: [UserModule,DataSourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
