import { EventsModule } from './chat/events/events.module';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatController } from './chat/chat.controller';
@Module({
  imports: [AuthModule, PrismaModule, EventsModule],
  controllers: [ChatController],
})
export class AppModule {}
