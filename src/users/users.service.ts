import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Fabian',
            password: bcrypt.hash('1234', 10),
        },
        {
            userId: 2,
            username: 'Ruben',
            password: bcrypt.hash('12345', 10),
        },
    ];
    
    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }
}
