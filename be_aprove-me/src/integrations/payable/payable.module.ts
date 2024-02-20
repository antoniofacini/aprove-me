import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { BullModule } from '@nestjs/bull';
import { BullBoardModule } from '@bull-board/nestjs';
import { PayableService } from './payable.service';
import { PayableController } from './payable.controller';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { PayableConsumer } from './payable.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'payable',
    }),
    BullBoardModule.forFeature({
      name: 'payable',
      adapter: BullAdapter,
    }),
  ],
  providers: [PrismaService, PayableService, PayableConsumer],
  controllers: [PayableController],
})
export class PayableModule {}
