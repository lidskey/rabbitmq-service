import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrapMicroservices() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'queue_mail',
      noAck: false,
      queueOptions: {
        durable: true
      },
    },
  });
  app.listen();
}
 async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.listen(3000)
   await app.startAllMicroservices();

}
bootstrap();
bootstrapMicroservices();