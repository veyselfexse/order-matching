import { registerAs } from '@nestjs/config';
import { url } from 'inspector';
import { DataSource, DataSourceOptions } from 'typeorm';
// import { config as dotenvConfig } from 'dotenv';

// dotenvConfig();

const config = {
  type: 'mssql',
  url: process.env.DATABASE_URL,
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT),
  // username: process.env.DATABASE_USER,
  // password: process.env.DATABASE_PASS,
  // database: process.env.DATABASE_DBNAME,
  options: {
    encrypt: process.env.DATABASE_SSL_ENABLED == 'true',
    useUTC: true,
  },
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  retryAttempts: 10,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
