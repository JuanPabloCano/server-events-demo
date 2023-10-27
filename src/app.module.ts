import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { MemoryDatabase } from './database/memory.database';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, MemoryDatabase],
})
export class AppModule {}
