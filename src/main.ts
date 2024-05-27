import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//let's make it a NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';

//we need join to synthesize the directory path which will contain templates
import { join } from 'path';

//we need nunjucks as render engine
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  //create a Nest application with Express under the hood
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

//To associate nunjucks with express, we need to get the underlying express platform from Nest app
const express = app.getHttpAdapter().getInstance();

//we also need to get directory name views (create it in project root directory), which is the root directory for our template files
const views = join(__dirname, '..', 'views');

//finally, configure nunjucks, setting views and express declared above
nunjucks.configure(views, { express });

//start the application
await app.listen(3000);

}
bootstrap();
