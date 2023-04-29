// Original file: node_modules/grpc-nest-proto/protos/product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateProductRequest as _product_CreateProductRequest, CreateProductRequest__Output as _product_CreateProductRequest__Output } from '../product/CreateProductRequest';
import type { CreateProductResponse as _product_CreateProductResponse, CreateProductResponse__Output as _product_CreateProductResponse__Output } from '../product/CreateProductResponse';
import type { FindOneRequest as _product_FindOneRequest, FindOneRequest__Output as _product_FindOneRequest__Output } from '../product/FindOneRequest';
import type { FindOneResponse as _product_FindOneResponse, FindOneResponse__Output as _product_FindOneResponse__Output } from '../product/FindOneResponse';

export interface ProductServiceClient extends grpc.Client {
  CreateProduct(argument: _product_CreateProductRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_CreateProductResponse__Output>;
  CreateProduct(argument: _product_CreateProductRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_CreateProductResponse__Output>;
  createProduct(argument: _product_CreateProductRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_CreateProductResponse__Output>;
  createProduct(argument: _product_CreateProductRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_CreateProductResponse__Output>;
  
  FindOne(argument: _product_FindOneRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_FindOneResponse__Output>;
  FindOne(argument: _product_FindOneRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_FindOneResponse__Output>;
  findOne(argument: _product_FindOneRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_FindOneResponse__Output>;
  findOne(argument: _product_FindOneRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_product_FindOneResponse__Output>;
  
}

export interface ProductServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateProduct: grpc.handleServerStreamingCall<_product_CreateProductRequest__Output, _product_CreateProductResponse>;
  
  FindOne: grpc.handleServerStreamingCall<_product_FindOneRequest__Output, _product_FindOneResponse>;
  
}

export interface ProductServiceDefinition extends grpc.ServiceDefinition {
  CreateProduct: MethodDefinition<_product_CreateProductRequest, _product_CreateProductResponse, _product_CreateProductRequest__Output, _product_CreateProductResponse__Output>
  FindOne: MethodDefinition<_product_FindOneRequest, _product_FindOneResponse, _product_FindOneRequest__Output, _product_FindOneResponse__Output>
}
