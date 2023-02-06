import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  // @MessagePattern({ cmd: 'greeting' })
  // getGreetingMessage(name: string): string {
  //   console.log('name', name);
  //   return `Hello ${name}`;
  // }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(name: string): Promise<string> {
    console.log('name', name);
    return `Hello ${name} Async`;
  }

  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log('data', data);
  }
}
