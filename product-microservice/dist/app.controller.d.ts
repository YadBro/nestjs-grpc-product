import { ProductsService } from './products/products.service';
import { CreateProductDto } from './products/dto/create-product.dto';
import { CreateProductResponse } from './protos/product/CreateProductResponse';
import { FindOneResponse } from './protos/product/FindOneResponse';
export declare class AppController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProduct: CreateProductDto): Promise<CreateProductResponse>;
    findOne(data: {
        id: number;
    }): Promise<FindOneResponse>;
}
