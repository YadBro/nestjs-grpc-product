import { Injectable } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: NestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

