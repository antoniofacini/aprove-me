import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayableModule } from './integrations/payable/payable.module';
import { AssignorModule } from './integrations/assignor/assignor.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { BullModule } from '@nestjs/bull';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';

@Module({
  imports: [
    PayableModule,
    AssignorModule,
    AuthModule,
    UsersModule,
    HealthModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter, // Or FastifyAdapter from `@bull-board/fastify`
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
