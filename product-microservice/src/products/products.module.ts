import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ProductsService],
  imports: [PrismaModule],
  exports: [ProductsService],
})
export class ProductsModule {}

