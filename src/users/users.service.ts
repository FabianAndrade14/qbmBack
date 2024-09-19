import { Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcryptjs';
// import { log } from 'console';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Fabian',
            password: '1234',
        },
        {
            userId: 2,
            username: 'Ruben',
            password: '12345',
        },
    ];
    
    async findOne(username: string): Promise<any> {
        console.log(username);
        return this.users.find(user => user.username === username);
    }
}
