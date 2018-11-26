import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-finish-game',
  templateUrl: './finish-game.component.html',
  styleUrls: ['./finish-game.component.css']
})
export class FinishGameComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  isWin: boolean = false;
  ngOnInit() {
    if (this.gameService.endWithSuccess) {
      this.isWin = true;
    }
  }

  restart() {
    this.router.navigate(['party']);
  }

  exit() {
    this.router.navigate(['start']);
  }

}