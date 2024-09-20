import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { log } from 'console';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find({ isDeleted: false }).exec();
    }

    async findOneById(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if(!user || user.isDeleted) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> { 
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
        if(!updatedUser || updatedUser.isDeleted) {
            throw new NotFoundException(`Usuario con id ${ id } no encontrado`);
        }
        return updatedUser;
    }

    async softDelete(id: string): Promise<User> {
        const user = await this.userModel.findByIdAndUpdate(id, {isDeleted: true}, {new: true}).exec();
        if(!user) {
            throw new NotFoundException(`Usuario con id ${ id } no encontrado`);
        }
        return user;
    }

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
    
    async findOne(username: string): Promise<any | undefined> {
        console.log(username);
        return this.users.find(user => user.username === username);
    }
}
