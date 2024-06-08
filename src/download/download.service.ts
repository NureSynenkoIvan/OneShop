import { Injectable } from '@nestjs/common';
import { createReadStream, readFileSync } from 'fs';
import { join } from 'path';

/**
 * This service would probably download files from a file storage
 * like S3, minio etc.
 */
@Injectable()
export class DownloadService {
  constructor() {
    // create connection to your file storage
  }

  fileStream() {
    console.log(process.cwd())
    return createReadStream(join(process.cwd(),  'download', 'shopit.apk'));
    
  }
}
