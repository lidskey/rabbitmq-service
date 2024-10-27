import { Controller, Get } from "@nestjs/common";
import { MailService } from "../service/mail.service";

@Controller('send')
export class MailController {
    constructor(private readonly mailService: MailService) { }
    
    @Get()
    sendMail(): any {
        return this.mailService.sendMail()
    }
}