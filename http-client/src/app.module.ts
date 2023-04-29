import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductServiceClient } from './protos/product/ProductService';
import { CreateProductDto } from './products/dto/create-product.dto';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'product',
        transport: Transport.GRPC,
        options: {
          package: 'product',
          protoPath: join(
            __dirname,
            '../node_modules/grpc-nest-proto/protos/product.proto',
          ),
          url: '0.0.0.0:50053',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
