import { Test, TestingModule } from '@nestjs/testing';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

describe('UrlsController', () => {
  let urlsController: UrlsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UrlsController],
      providers: [UrlsService],
    }).compile();

    urlsController = app.get<UrlsController>(UrlsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(urlsController.getHello()).toBe('Hello World!');
    });
  });
});
