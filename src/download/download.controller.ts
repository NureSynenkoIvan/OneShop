import {
    Controller,
    Get,
    Res,
    StreamableFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { DownloadService } from './download.service';
  import { Response } from 'express';

  
  @Controller('download')
  @ApiTags('download')
  export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}
  
    @Get('streamable')
    streamable(@Res({ passthrough: true }) response: Response) {
      const file = this.downloadService.fileStream();
      // or
      // const file = this.downloadService.fileBuffer();
      return new StreamableFile(file); // 👈 supports Buffer and Stream
    }
  }
  