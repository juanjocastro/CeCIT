import { Body, Controller, Post } from '@nestjs/common';
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
