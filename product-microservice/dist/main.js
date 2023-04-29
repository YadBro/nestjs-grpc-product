"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger();
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            protoPath: (0, path_1.join)(__dirname, '../node_modules/grpc-nest-proto/protos/product.proto'),
            package: 'product',
            url: '0.0.0.0:50053',
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen();
    logger.log('Product Microservice is listening...');
}
bootstrap();
//# sourceMappingURL=main.js.map