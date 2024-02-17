import { Controller, Post, Body } from '@nestjs/common';
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
}
