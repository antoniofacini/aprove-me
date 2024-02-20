import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { CreateAssignorDto, UpdateAssignorDto } from './dto/assignor.dto';

@Controller('integrations/assignor')
export class AssignorService {
  constructor(private prisma: PrismaService) {}

  @Get(':id')
  async getAssignor(@Param('id') id: number) {
    return this.prisma.assignor.findUnique({
      where: { id: id },
    });
  }

  @Post()
  async createAssignor(@Body() createAssignorDto: CreateAssignorDto) {
    return this.prisma.assignor.create({ data: createAssignorDto });
  }

  @Put(':id')
  async updateAssignor(
    @Param('id') id: number,
    @Body() updateAssignorDto: UpdateAssignorDto,
  ) {
    return this.prisma.assignor.update({
      where: { id: id },
      data: updateAssignorDto,
    });
  }

  @Delete(':id')
  async deleteAssignor(@Param('id') id: number) {
    return this.prisma.assignor.delete({
      where: { id: id },
    });
  }
}
