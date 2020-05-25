import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const URL = 'localhost:50051';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: URL,
        package: 'gateway',
        protoPath: path.resolve(__dirname, '../../../api/api.proto'),
        loader: {
          includeDirs: [path.resolve(__dirname, '../../..')],
        },
      },
    },
  );

  await app.listen(() => {
    console.log('Gateway service has started');
  });
}
bootstrap();
