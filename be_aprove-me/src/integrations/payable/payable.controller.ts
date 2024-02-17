import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreatePayableDto, UpdatePayableDto } from './dto/payable.dto';
import { PayableService } from './payable.service';
import { JwtAuthGuard } from '../../auth/jwt.guard';

@Controller('/integrations/payable')
export class PayableController {
  constructor(private payableService: PayableService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payableService.getPayable(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPayableDto: CreatePayableDto) {
    return this.payableService.createPayable(createPayableDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePayableDto: UpdatePayableDto) {
    return this.payableService.updatePayable(id, updatePayableDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.payableService.deletePayable(id);
  }
}
