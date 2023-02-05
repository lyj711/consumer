import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);


  printHello(data: any) {
    this.logger.log('Hello...', data);
  }
}
