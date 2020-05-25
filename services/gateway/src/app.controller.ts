import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { SummatorServiceClient } from './interfaces/summator.interface';

interface AddRequest {
  a: number;
  b: number;
}

@Controller()
export class AppController implements OnModuleInit {
  private summatorService: SummatorServiceClient;

  constructor(@Inject('SUMMATOR_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.summatorService = this.client.getService<SummatorServiceClient>(
      'SummatorService',
    );
  }

  @GrpcMethod('GatewayService', 'Add')
  getHello(body: AddRequest) {
    console.log('this.summatorService', this.summatorService);
    return this.summatorService.sum({ numbers: [body.a, body.b] }).toPromise();
  }
}
