import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity/user.entity';
import { PrismaService } from '../services/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(login: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { login: login },
    });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        login: createUserDto.login,
        password: hashedPassword,
      },
    });
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }

  async toggleActive(id: number): Promise<User> {
    const user = await this.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.prisma.user.update({
      where: { id: id },
      data: { active: !user.active },
    });
  }
}
