import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DoSomething } from './something';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DoSomething],
})
export class AppModule {}
