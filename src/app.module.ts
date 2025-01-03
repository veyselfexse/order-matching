import database from './config/database';
import configs from './config/configuration';

import { Module, NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { RequestContextModule } from './request-context/request-context.module';
import { HealthModule } from './health/health.module';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';
import { OrderModule } from './modules/order.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs, database],
    }),
    TypeOrmModule.forRootAsync({
      imports: undefined,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm')
    }),
    RequestContextModule,
    HealthModule,
    OrderModule
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
