import { Injectable, Req, Res } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3UploadService {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  async uploadImages(files, folder) {
    const locations = [];
    const filePrefix = `${folder}/${Date.now()}_${Math.round(
      Math.random() * 1e9,
    )}`;
    for (const file of files) {
      console.log(file);
      const { originalname } = file;
      const res = await this.s3Upload(
        file.buffer,
        this.AWS_S3_BUCKET,
        originalname,
        file.mimetype,
        filePrefix,
      );
      console.log(res);
      if (res.Location) {
        locations.push(res.Location);
      }
    }
    return locations;
  }

  async s3Upload(file, bucket, name, mimetype, folder) {
    const params = {
      Bucket: bucket,
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      Key: `${folder}/${name}`,
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }
}
