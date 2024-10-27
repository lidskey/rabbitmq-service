// app.module.ts
import { Module } from '@nestjs/common';
import { MailService } from './service/mail.service';
import { MailController } from './controller/mail.controller';


@Module({
  controllers:[MailController],
  providers: [MailService],
  exports: [MailService], // Caso precise usá-lo em outros módulos
})
export class MailModule {}
