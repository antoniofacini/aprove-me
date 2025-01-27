import { Module } from '@nestjs/common';
import { AssignorController } from './assignor.controller';
import { AssignorService } from './assignor.service';
import { PrismaService } from '../../services/prisma.service';

@Module({
  controllers: [AssignorController],
  providers: [AssignorService, PrismaService],
})
export class AssignorModule {}
