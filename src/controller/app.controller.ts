import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from '../entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Post()
  create(@Body() user: User) {
    return this.eventEmitter.emitAsync('create.user', user);
  }

  @Get()
  getAll() {
    return this.eventEmitter.emitAsync('get.all.controller');
  }

  @Get(':name')
  getOne(@Param('name') name: string) {
    return this.eventEmitter.emitAsync('get.one.controller', name);
  }
}
