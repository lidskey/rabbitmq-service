import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class MailConsumer {
  @MessagePattern('mensagem_enviada')
  handleMensagemEnviada(data: { data: { msg: string } }) {
    console.log('Mensagem recebida:', data.data.msg);
    // Lógica para processar a mensagem
  }
}
