import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { newUserDTO } from '../dto/newUser.DTO';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(body: newUserDTO) {
    const newUser = this.userRepo.create(body);

    return await this.userRepo.save(newUser);
  }
}
