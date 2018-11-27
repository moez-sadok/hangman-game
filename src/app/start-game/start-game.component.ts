import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  userPsedo = new FormControl('', [Validators.required]);

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {}

  start() {
    this.gameService.userName = this.userPsedo.value;
    this.router.navigate(['party']);
  }

}
