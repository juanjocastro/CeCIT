import { Body, Controller, Post, Query, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { UserService } from '../service/user.service';
import type { newUserDTO } from '../dto/newUser.DTO';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }

    @Post("")
    async createUser(@Body() body: newUserDTO){
        return await this.userService.createUser(body);
    }
}
