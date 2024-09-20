import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDTO } from './dto/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Autenticar al usuario' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  login(@Body() loginDTO: LoginDTO) {
    const { email, password } = loginDTO;

    if(email === 'user@example.com' && password === 'password123') {
      return { message: 'Login exitoso', token: 'jwt_token' };
    } 
    return { message: 'Credenciales inválidas' }
  }
  // async login(@Request() req) {
  //   return this.authService.login(req.user);    
  // }
}
