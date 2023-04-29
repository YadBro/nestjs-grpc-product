"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products/products.service");
const microservices_1 = require("@nestjs/microservices");
const create_product_dto_1 = require("./products/dto/create-product.dto");
const prisma_client_exception_filter_1 = require("./prisma-client-exception/prisma-client-exception.filter");
let AppController = class AppController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async createProduct(createProduct) {
        const productCreated = await this.productsService.create(createProduct);
        const id = productCreated.id;
        return { error: [], statusCode: 201, id };
    }
    async findOne(data) {
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
};
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createProduct", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOne", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseFilters)(prisma_client_exception_filter_1.PrismaClientExceptionFilter),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map