import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  public userName = '';
  public endWithSuccess = false;

  constructor() {}

  getWords(): string[] {
    return ['ANGULAR', 'REACT', 'JAVASCRIPT', 'HTML'];
  }
}
