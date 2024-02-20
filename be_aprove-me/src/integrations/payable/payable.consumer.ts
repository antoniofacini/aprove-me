import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { PayableService } from './payable.service';
import { Logger } from '@nestjs/common';

@Processor('payable')
export class PayableConsumer {
  private readonly logger = new Logger(PayableConsumer.name);
  constructor(private readonly payableService: PayableService) {}

  @Process()
  async handlePayable(job: Job<any>) {
    const { data } = job;

    console.log('Processing payable:', data);
    try {
      await this.payableService.createPayable(data);
    } catch (error) {
      console.error('Error processing payable:', error);
    }

    console.log('Processing completed');

    // await this.payableService.sendEmail(data.length);
  }
}
