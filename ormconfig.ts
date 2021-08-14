import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Users } from './src/entities/Users';

import dotenv from 'dotenv';
dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
