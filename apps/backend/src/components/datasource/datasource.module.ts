import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../user/user.entity';
import { Socio } from '../socio/socio.entity';

dotenv.config();

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        try {
          const dataSource = new DataSource({
            type: 'postgres',
            url: process.env.DB_HOST,
            entities: [User, Socio],
            synchronize: true,
          });
          await dataSource.initialize();
          console.log('DataSource initialized successfully');
          return dataSource;
        } catch (e) {
          console.log(e);
          return e;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class DataSourceModule {}
