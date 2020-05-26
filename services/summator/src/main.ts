import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const URL = 'localhost:50052';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: URL,
        package: 'summator',
        protoPath: path.resolve(__dirname, '../../../api/summator.proto'),
      },
    },
  );

  await app.listen(() => {
    console.log('Summator service has started');
  });
}
bootstrap();
