import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  public userName = '';
  public endWithSuccess = false;
  private words: string[] = ['ANGULAR', 'REACT', 'JAVASCRIPT', 'HTML'];

  constructor() {}

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}
