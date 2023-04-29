import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { ProductServiceClient } from './protos/product/ProductService';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CreateProductDto } from './products/dto/create-product.dto';
import { Observable, from } from 'rxjs';
import {
  ClientReadableStream,
  ClientWritableStream,
  Metadata,
  ServerUnaryCall,
  handleClientStreamingCall,
} from '@grpc/grpc-js';
import {
  CreateProductResponse,
  CreateProductResponse__Output,
} from './protos/product/CreateProductResponse';
import {
  CreateProductRequest,
  CreateProductRequest__Output,
} from './protos/product/CreateProductRequest';
import { Response } from 'express';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('ProductHTTPClient');

  // @Client({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'product',
  //     protoPath: join(
  //       __dirname,
  //       '../node_modules/grpc-nest-proto/protos/product.proto',
  //     ),
  //     url: '0.0.0.0:50053',
  //   },
  // })
  @Inject('product')
  private client: ClientGrpc;
  private grpcProductService: ProductServiceClient;

  onModuleInit() {
    this.grpcProductService =
      this.client.getService<ProductServiceClient>('ProductService');
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.grpcProductService.findOne({ id });
  }

  // Server Streaming
  @Post('create')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.grpcProductService.createProduct(createProductDto);
  }

  // Client Streaming
  // @Post('create')
  // createProduct(
  //   @Body() createProductDto: CreateProductDto,
  //   @Res() response: Response,
  // ): any {
  //   const createProductStream: any = this.grpcProductService.createProduct(
  //     (error, data) => {
  //       if (error) {
  //         console.error(error);
  //         response.status(500).send(error.details);
  //       } else {
  //         response.status(201).send({ id: data.id });
  //       }
  //     },
  //   );

  //   const createProductRequest: CreateProductRequest__Output = {
  //     name: createProductDto.name,
  //     stock: createProductDto.stock,
  //     price: createProductDto.price,
  //   };
  //   createProductStream.subscribe();
  //   console.log(createProductStream);
  //   createProductStream.write(createProductRequest);
  //   createProductStream.end();
  // }
}
