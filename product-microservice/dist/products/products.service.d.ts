import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
