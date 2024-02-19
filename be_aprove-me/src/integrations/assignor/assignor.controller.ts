// assignor.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateAssignorDto, UpdateAssignorDto } from './dto/assignor.dto';
import { AssignorService } from './assignor.service';
import { JwtAuthGuard } from '../../auth/jwt.guard';

@Controller('integrations/assignor')
export class AssignorController {
  constructor(private assignorService: AssignorService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignorService.getAssignor(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAssignorDto: CreateAssignorDto) {
    return this.assignorService.createAssignor(createAssignorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssignorDto: UpdateAssignorDto,
  ) {
    return this.assignorService.updateAssignor(id, updateAssignorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.assignorService.deleteAssignor(id);
  }
}
