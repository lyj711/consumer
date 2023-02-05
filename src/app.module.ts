import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RmqModule } from './rmq/rmq.module';
import { RmqService } from './rmq/rmq.service';

@Module({
  imports: [RmqModule],
  controllers: [AppController],
  providers: [AppService,ConfigService, RmqService],
})
export class AppModule {}
