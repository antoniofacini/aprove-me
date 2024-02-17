import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service'; // adjust this import to your project structure
import { PayableService } from './payable.service';
import { PayableController } from './payable.controller';

@Module({
  providers: [PrismaService, PayableService], // add PrismaService here
  controllers: [PayableController],
})
export class PayableModule {}
