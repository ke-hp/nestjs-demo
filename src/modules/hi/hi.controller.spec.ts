import { Test, TestingModule } from '@nestjs/testing';
import { HiController } from './hi.controller';
import { HiService } from './hi.service';

describe('AppController', () => {
  let appController: HiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HiController],
      providers: [HiService],
    }).compile();

    appController = app.get<HiController>(HiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
