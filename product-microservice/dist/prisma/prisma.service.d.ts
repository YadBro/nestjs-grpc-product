import { NestApplication } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    enableShutdownHooks(app: NestApplication): Promise<void>;
}
