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

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: { login: string; password: string }) {
    return this.usersService.createUser(
      createUserDto.login,
      createUserDto.password,
    );
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
