import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlsService {
  getHello(): string {
    return 'Hello World!';
  }
}
