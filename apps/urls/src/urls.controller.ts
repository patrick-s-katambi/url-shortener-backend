import { Controller, Get } from '@nestjs/common';
import { UrlsService } from './urls.service';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get()
  getHello(): string {
    return this.urlsService.getHello();
  }
}
