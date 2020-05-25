import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUMMATOR_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'summator',
          protoPath: resolve(__dirname, '../../../api/summator.proto'),
          url: 'localhost:50052',
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
