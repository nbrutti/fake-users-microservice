import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}    

  @MessagePattern('list_users')
  findAll() {
    return this.usersService.findAll();
  }
}
