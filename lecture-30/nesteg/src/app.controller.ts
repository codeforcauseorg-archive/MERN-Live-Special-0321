import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DoSomething } from './something';

@Controller()
export class AppController {
  constructor(private readonly appService: DoSomething) {}

  @Get('/')
  getHello(): string {
    return this.appService.hello();
  }

  @Delete('/moto')
  getmoto(): string {
    return 'Hello Moto';
  }
}
