import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as nunjucks from 'nunjucks';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @Render('index.html')

  getHello2(): {}
  {
    return {message: 'Hello World!', title: 'My Greeting App'};
  }
}
