import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
