import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { CreatePayableDto, UpdatePayableDto } from './dto/payable.dto';

@Injectable()
export class PayableService {
  constructor(private prisma: PrismaService) {}

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
}
