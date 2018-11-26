import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {GameService} from '../../services/game.service';
import {PenduComponent} from '../pendu/pendu.component';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  private words: string[] = ['ANGULAR', 'REACT', 'JAVASCRIPT', 'HTML'];
  private maxAttemps: number = 7;
  private restAttemps: number = this.maxAttemps;

  private wordSearch = '';
  public selectedChar = '';

   @ViewChild(PenduComponent) penduComponent: PenduComponent;

  constructor( private router: Router,
  private gameService : GameService) { }

  ngOnInit() {
    this.initParty();
  }

  initParty() {
    this.wordSearch = this.getRandomWord();
    this.restAttemps = this.maxAttemps;
    this.gameService.endWithSuccess = false;
  }

  onUserSelectChar(event) {
    this.selectedChar = event;
  }

  checkAttemps(isCorrect) {
    if (!isCorrect) {
      this.restAttemps--;
      this.penduComponent.nextImage();
    }
    if (this.restAttemps < 1) {
          this.gameService.endWithSuccess = false;
          this.router.navigate(['finish']);
    }
  }

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkWordFound(isFound) {
   if(isFound){
    this.gameService.endWithSuccess = true;
     this.router.navigate(['finish']);
   }
  }

  exit(){
    this.router.navigate(['start']);
  }


}