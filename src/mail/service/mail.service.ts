import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService  {
  private transporter;
  
  constructor(@Inject('RABBITMQ_SERVICE')private client: ClientProxy)  {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'lloyd0@ethereal.email',
        pass: 'zr56pWjasHmcp1P6ug',
      },
    });
  }

  async sendMail(/* to: string, subject: string, text: string */) {
    const mailOptions = {
      from: 'lloyd0@ethereal.email',
      to: 'tayluanjesus0298@gmail.com',
      subject: 'Abacate',
      text: 'DLKFJSKFJLSFLDSJFL',
    };
    this.client.emit('mensagem_enviada', "Email enviado");
/*     const info = await this.transporter.sendMail(mailOptions);
    console.log(`Mensagem: ${info.messageId}`);
 */  }
}
