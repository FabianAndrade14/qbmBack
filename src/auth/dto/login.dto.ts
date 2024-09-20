import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({ example: 'user@example.com', description: 'Email de usuario' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario'})
  password: string;
}
