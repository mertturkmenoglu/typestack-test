import { Service } from 'typedi';
import { v4 } from 'uuid';
import CreateUserDto from '../dto/CreateUserDto';
import User from '../models/User';

@Service()
class UserService {
  private users: User[] = [
    {
      id: 'abc',
      name: 'emily',
    },
    {
      id: 'def',
      name: 'diana',
    },
    {
      id: 'ghi',
      name: 'barbara',
    },
    {
      id: 'jkl',
      name: 'selina',
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  findUserById(id: string): User | null {
    const user = this.users.filter((it) => it.id === id);

    if (user.length === 1) {
      return user[0];
    }

    return null;
  }

  addUser(dto: CreateUserDto): User {
    const user = new User();
    user.id = v4();
    user.name = dto.name;
    this.users.push(user);
    return user;
  }
}

export default UserService;
