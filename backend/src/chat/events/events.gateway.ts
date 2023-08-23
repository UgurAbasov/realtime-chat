import { GetUserDto } from '../dto/getUser.dto';
import { AddUserDto } from './../dto/addUser.dto';
import { OnModuleInit } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
import { OnGatewayConnection } from "@nestjs/websockets";
import { PrismaService } from 'src/prisma/prisma.service';


type Data = {
    room: string
    name: string
}

type Data1 = {
    message: string
    email: string
}

const users = []

const getUser = (user: string) => {
    const arr = users.find((obj) => obj.id === user)
    return arr
}

const addUser = (userObj: object) => {
    users.push(userObj)
}

@WebSocketGateway()
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {

    @WebSocketServer()
    server: Server

    constructor(private prismaService: PrismaService) { }

    @SubscribeMessage('join')
    async handleEvent(@ConnectedSocket() client: Socket, @MessageBody() addUser: AddUserDto) {
       try {
        const room = await this.prismaService.room.findMany({
            where: {
                name: addUser.roomName
            },
            include: {
                message: {
                    select: {
                        body: true
                    }
                }
            }
        })
            client.join(addUser.roomName)
            const mapping = room[0].message.map((el) =>  client.emit('join',el))
    } catch(e){
        client.emit('join', { error: e })
    }
    }

    @SubscribeMessage('addMessage')
    async handleMessega(@ConnectedSocket() client: Socket, @MessageBody() getUser: GetUserDto) {
        try {
        if (getUser.targetType === 'private') {
            const privateId = Number(getUser.targetId)
            const message = await this.prismaService.message.create({
                data: {
                    privateId,
                    roomId: null,
                    body: getUser.message
                }
            })
            const privated = await this.prismaService.private.findUnique({
                where: {
                    id: privateId
                }
            })
            this.server.to(privated.name).emit('addMessage', { text: `${getUser.message}`, user: getUser.userName });
        } else {
            const roomId = Number(getUser.targetId)
            const message = await this.prismaService.message.create({
                data: {
                    roomId,
                    privateId: null,
                    body: getUser.message
                }
            })
            const room = await this.prismaService.room.findUnique({
                where: {
                    id: roomId
                }
            })
            this.server.to(room.name).emit('addMessage', { text: `${getUser.message}`, user: getUser.userName });
        }
    } catch(e){
        client.emit('addMessage', {error: e})
        console.log(e)
    }
}

    handleConnection(client: any, ...args: any[]) {
        console.log(client.id)
    }

    handleDisconnect(client: any) {

    }

    onModuleInit() {

    }

}