import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/user.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(login);
    if (user && (await compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { login: user.login, sub: user.userId };
    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // await this.usersService.updateUser(user.userId, {
    //   token: token,
    //   refreshToken: refreshToken,
    // });

    return {
      access_token: token,
      refreshToken: refreshToken,
    };
  }

  async refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.usersService.getUserById(payload.sub);

      if (!user) {
        throw new UnauthorizedException();
      }

      const access_token = this.jwtService.sign({
        username: user.login,
        sub: user.id,
      });

      await this.usersService.updateUser(user.id, {
        token: access_token,
      });

      return {
        access_token: access_token,
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async signup(user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
