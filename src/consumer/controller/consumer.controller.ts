import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  @MessagePattern('mensagem_enviada')
  async gotEmail(@Payload() data, @Ctx() context: RmqContext) {
    console.log(data);
  }
}
