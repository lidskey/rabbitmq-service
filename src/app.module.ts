import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailService } from './mail/service/mail.service';
import { MailController } from './mail/controller/mail.controller';
import { MailConsumer } from './consumer/service/consumer.service';
import { ConsumerController } from './consumer/controller/consumer.controller';
import { MailModule } from './mail/mail.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [ClientsModule.register([{
    name: 'RABBITMQ_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'queue_mail',
      queueOptions: {
        durable: true
      }
    }
  }],
  )],
  controllers: [AppController, MailController, ConsumerController],
  providers: [AppService, MailService, MailConsumer],
})
export class AppModule {}
