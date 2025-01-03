import {
  NestFactory,
  BaseExceptionFilter,
  HttpAdapterHost,
} from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AllExceptionsFilter } from './utils/filter/all.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });
  app.useGlobalPipes(new ValidationPipe());

  // Access configuration values
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  const builder = new DocumentBuilder()
    .setTitle('Fexse Order Matching')
    .setVersion('1.0');
  
  const servers = configService.get<string>('swagger_servers');
  if (servers) {
    const serverList = servers.split(',');
    serverList.forEach((server) => {
      builder.addServer(server);
    });
  }

  const config = builder.build();

  config;

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new AllExceptionsFilter());

  app.enableCors();
  await app.listen(port);
}
bootstrap();
