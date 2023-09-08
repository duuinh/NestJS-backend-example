import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { S3UploadService } from './s3Upload.service';

@Controller('/v1/upload')
export class S3UploadController {
  constructor(private readonly s3UploadService: S3UploadService) {}

  @Post('/images/contract')
  @UseInterceptors(FilesInterceptor('images'))
  uploadImgsForContract(@UploadedFiles() images: Array<Express.Multer.File>) {
    return this.s3UploadService.uploadImages(images, 'contracts');
  }
}
