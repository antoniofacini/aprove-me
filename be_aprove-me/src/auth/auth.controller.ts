import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('integrations/auth')
  async login(@Body() body: { login: string; password: string }) {
    return this.authService.login(body);
  }

  @Post('integrations/signup')
  async signup(@Body() body: { login: string; password: string }) {
    return this.authService.signup(body);
  }
}
