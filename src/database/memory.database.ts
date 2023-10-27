import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { User } from '../entities/user.entity';

@Injectable()
export class MemoryDatabase {
  private readonly store: Set<User>;

  constructor() {
    this.store = new Set<User>([
      {
        name: 'Cata',
        age: 27,
        email: 'cata@gmail.com',
        phone: 979347,
      },
    ]);
  }

  @OnEvent('create.user.db')
  create(data: User) {
    this.store.add(data);
  }

  @OnEvent('get.all')
  getAll() {
    return [...this.store.values()];
  }

  @OnEvent('get.one')
  getOne(name: string) {
    let userFound: User | string;
    for (const user of this.store.values()) {
      userFound = user.name === name ? user : 'user not found';
    }

    return userFound;
  }
}
