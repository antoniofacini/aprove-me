import {
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Get,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: { login?: string; password?: string },
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  @Patch(':id/active')
  toggleActive(@Param('id') id: number) {
    return this.usersService.toggleActive(id);
  }
}
