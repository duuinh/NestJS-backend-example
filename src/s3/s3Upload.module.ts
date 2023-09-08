import { Module } from '@nestjs/common';
import { S3UploadService } from './S3Upload.service';
import { S3UploadController } from './s3Upload.controller';

@Module({
  controllers: [S3UploadController],
  providers: [S3UploadService],
})
export class S3UploadModule {}
