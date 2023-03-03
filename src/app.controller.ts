import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  isProcessing = false;
  constructor() {
    setInterval(async () => {
      if (!this.isProcessing) {
        console.log("Starting processing...")
        await this.process();
        console.log("Processing done!")
      }
    }, 10000);
  }

  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    console.log('name', name);
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(name: string): Promise<string> {
    console.log('name', name);
    return `Hello ${name} Async`;
  }

  async process() {
    this.isProcessing = true
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        
        resolve('Hello World!');
      }, 12000)
    });
    await promise;
    this.isProcessing = false;
  }
}
