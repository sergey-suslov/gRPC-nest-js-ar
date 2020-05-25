import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('SummatorService', 'Sum')
  sum(body: { numbers: number[] }): { result: number } {
    return { result: body.numbers.reduce((a, v) => a + v, 0) };
  }
}
