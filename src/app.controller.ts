import { Controller, Get} from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService} from './rmq/rmq.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rmqService: RmqService,
    ) {}

  @EventPattern('HELLO_created')
  async printHello(@Payload() data: any, @Ctx() context: RmqContext) {
    // const channel = context.getChannelRef();
    // const originalMsg = context.getMessage();
    this.appService.printHello(data);
    // await channel.ack(originalMsg);
    this.rmqService.ack(context);
  }

}
