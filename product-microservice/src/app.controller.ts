import { Controller, UseFilters } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateProductDto } from './products/dto/create-product.dto';
import { CreateProductResponse } from './protos/product/CreateProductResponse';
import { FindOneRequest } from './protos/product/FindOneRequest';
import { FindOneResponse } from './protos/product/FindOneResponse';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import { Metadata, ServerWritableStream } from '@grpc/grpc-js';
import { CreateProductRequest__Output } from './protos/product/CreateProductRequest';

@Controller()
@UseFilters(PrismaClientExceptionFilter)
export class AppController {
  constructor(private readonly productsService: ProductsService) {}

  // Server Streaming
  @GrpcMethod('ProductService')
  async createProduct(
    createProduct: CreateProductDto
  ): Promise<CreateProductResponse> {
    const productCreated = await this.productsService.create(createProduct);
    const id = productCreated.id;

    return { error: [], statusCode: 201, id };
  }

  // @GrpcMethod('ProductService')
  // async createProduct(
  //   call: ServerWritableStream<
  //     CreateProductRequest__Output,
  //     CreateProductResponse
  //   >,
  //   metadata: Metadata
  // ): Promise<void> {
  //   call.on('data', async (request: CreateProductRequest__Output) => {
  //     try {
  //       const createdProduct = await this.productsService.create(request);
  //       const response: CreateProductResponse = {
  //         statusCode: 200,
  //         error: [],
  //         id: createdProduct.id,
  //       };
  //       call.write(response);
  //     } catch (error) {
  //       const response: CreateProductResponse = {
  //         statusCode: 500,
  //         error: [error.message],
  //         id: null,
  //       };
  //       call.write(response);
  //     }
  //   });
  //   call.on('end', () => {
  //     call.end();
  //   });
  // }

  @GrpcMethod('ProductService')
  async findOne(data: { id: number }): Promise<FindOneResponse> {
    const product = await this.productsService.findOne(data.id);
    if (!product) {
      return {
        data: {},
        error: [`Product with id ${data.id} is not found`],
        statusCode: 404,
      };
    }

    return {
      data: product,
      error: [],
      statusCode: 200,
    };
  }
}

