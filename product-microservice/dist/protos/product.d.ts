import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';
import type { ProductServiceClient as _product_ProductServiceClient, ProductServiceDefinition as _product_ProductServiceDefinition } from './product/ProductService';
type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
    new (...args: ConstructorParameters<Constructor>): Subtype;
};
export interface ProtoGrpcType {
    product: {
        CreateProductRequest: MessageTypeDefinition;
        CreateProductResponse: MessageTypeDefinition;
        FindOneData: MessageTypeDefinition;
        FindOneRequest: MessageTypeDefinition;
        FindOneResponse: MessageTypeDefinition;
        ProductService: SubtypeConstructor<typeof grpc.Client, _product_ProductServiceClient> & {
            service: _product_ProductServiceDefinition;
        };
    };
}
export {};
