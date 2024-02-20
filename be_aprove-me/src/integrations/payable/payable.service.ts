import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { CreatePayableDto, UpdatePayableDto } from './dto/payable.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class PayableService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('payable') private readonly payableQueue: Queue,
  ) {}

  async getPayable(id: string) {
    return this.prisma.payable.findUnique({
      where: { id },
    });
  }

  async createPayable(createPayableDto: CreatePayableDto) {
    const { assignorId, ...rest } = createPayableDto;
    return this.prisma.payable.create({
      data: {
        ...rest,
        assignor: {
          connect: {
            id: assignorId,
          },
        },
      },
    });
  }

  async updatePayable(id: string, updatePayableDto: UpdatePayableDto) {
    return this.prisma.payable.update({
      where: { id },
      data: {
        ...updatePayableDto,
        assignor: {
          connect: {
            id: updatePayableDto.assignor,
          },
        },
      },
    });
  }

  async deletePayable(id: string) {
    return this.prisma.payable.delete({
      where: { id },
    });
  }

  async createBatch(createPayableDtos: CreatePayableDto[]) {
    if (createPayableDtos.length > 10000) {
      throw new BadRequestException(
        'Cannot process more than 10000 payables at once',
      );
    }

    try {
      await Promise.all(
        createPayableDtos.map((dto) => this.payableQueue.add(dto)),
      );
    } catch (error) {
      console.error('Failed to add DTOs to queue:', error);
    }
  }

  async sendEmail(count: number) {
    return count;
  }
}
