import { Module } from '@nestjs/common';
import { MathController } from './math.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  providers: [],
  controllers: [MathController],
})
export class MathModule {}