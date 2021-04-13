import {
  Body, Get, HttpCode, JsonController, Param, Post,
} from 'routing-controllers';
import { Service } from 'typedi';
import CreateUserDto from '../dto/CreateUserDto';
import User from '../models/User';
import UserService from '../services/UserService';

@JsonController('/api/v1/user')
@Service()
class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/all')
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): User | null {
    return this.userService.findUserById(id);
  }

  @HttpCode(201)
  @Post('/')
  createUser(@Body() dto: CreateUserDto): User {
    return this.userService.addUser(dto);
  }
}

export default UserController;
