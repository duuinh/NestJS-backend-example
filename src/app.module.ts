import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ContractsService } from './contracts/contracts.service';
import { ContractsController } from './contracts/contracts.controller';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [UsersModule, PrismaModule, ContractsModule],
  controllers: [AppController, UsersController, ContractsController],
  providers: [AppService, UsersService, ContractsService],
})
export class AppModule {}
