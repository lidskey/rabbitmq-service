import { Module } from "@nestjs/common";
import { ConsumerController } from "./controller/consumer.controller";

@Module({
    imports: [],
    controllers: [ConsumerController],
    providers:[],
})
export class ConsumerModule{
}