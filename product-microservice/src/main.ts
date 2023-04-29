import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(
          __dirname,
          '../node_modules/grpc-nest-proto/protos/product.proto'
        ),
        package: 'product',
        url: '0.0.0.0:50053',
      },
    }
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
  logger.log('Product Microservice is listening...');
}
bootstrap();

