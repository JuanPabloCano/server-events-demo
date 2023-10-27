import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { User } from '../entities/user.entity';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @OnEvent('create.user')
  create(data: User): string {
    this.eventEmitter.emit('create.user.db', data);
    return `New user created successfully: ${JSON.stringify(data)}`;
  }

  @OnEvent('get.all.controller')
  getAll() {
    return this.eventEmitter.emitAsync('get.all').then((res) => res[0][0]);
  }

  @OnEvent('get.one.controller')
  getOne(name: string) {
    return this.eventEmitter.emitAsync('get.one', name).then((res) => res[0]);
  }
}
