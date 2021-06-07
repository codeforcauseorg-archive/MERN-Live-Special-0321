import { Injectable } from '@nestjs/common';

@Injectable()
export class DoSomething {
  hello = () => {
    return 'Hu la la';
  };
}
