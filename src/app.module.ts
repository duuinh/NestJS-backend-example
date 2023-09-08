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
import { S3UploadController } from './s3/S3Upload.controller';
import { S3UploadService } from './s3/S3Upload.service';
import { S3UploadModule } from './s3/S3Upload.module';

@Module({
  imports: [UsersModule, PrismaModule, ContractsModule, S3UploadModule],
  controllers: [
    AppController,
    UsersController,
    ContractsController,
    S3UploadController,
  ],
  providers: [AppService, UsersService, ContractsService, S3UploadService],
})
export class AppModule {}
