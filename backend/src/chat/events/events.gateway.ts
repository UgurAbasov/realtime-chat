import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import {Server} from 'socket.io'
@WebSocketGateway()
export class EventGateway {
    @WebSocketServer()
    server: Server


    @SubscribeMessage('event')
    handleEvent(@MessageBody() data: string): string {
        return data;
      }
}