import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import 'dotenv/config';
import { RmqService } from './rmq/rmq.service';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule);
  // connect to rabbitmq
  const rmqService = app.get<RmqService>(RmqService);
  app.listen = async () => {
    await rmqService.getOptions("HELLO");
  }
}
bootstrap();