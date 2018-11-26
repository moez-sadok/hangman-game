

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//Matrial //
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';

 
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* app components */
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';

import { KeybordComponent } from './gaming/keybord/keybord.component';
import { PartyComponent } from './gaming/party/party.component';

import { PenduComponent } from './gaming/pendu/pendu.component';
import { WordComponent } from './gaming/word/word.component';
import { FinishGameComponent } from './gaming/finish-game/finish-game.component';
import { GameService } from './services/game.service';

@NgModule({
  exports: [],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule, AppRoutingModule, MatChipsModule, MatGridListModule, MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule],
  declarations: [AppComponent, StartGameComponent, KeybordComponent, PartyComponent, PenduComponent, WordComponent, FinishGameComponent],
  bootstrap: [AppComponent],
  providers: [GameService]
})
export class AppModule { }
