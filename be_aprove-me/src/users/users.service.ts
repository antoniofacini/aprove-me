import { Injectable } from '@nestjs/common';
import { User } from './user.entity/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  async getUser(login: string): Promise<User | undefined> {
    // Replace this with your actual database query
    const users: User[] = [
      {
        login: 'aprovame',
        password:
          '$2b$10$QbZvDh.IyU28YVZ5/zy1ieZCQZ3wC.9/7r8K5G6VJ1C5gMGq1v5E.', // Hashed 'aprovame'
      },
    ];
    return users.find((user) => user.login === login);
  }

  async createUser(login: string, password: string): Promise<User> {
    const hashedPassword = await hash(password, 10);
    const user = new User();
    user.login = login;
    user.password = hashedPassword;
    // Save the user to the database and return the user
    // Replace this with your actual database query
    return user;
  }
}
