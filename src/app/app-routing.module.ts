import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartGameComponent } from './start-game/start-game.component';
import { PartyComponent } from './gaming/party/party.component';
import { FinishGameComponent } from './gaming/finish-game/finish-game.component';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartGameComponent },
  { path: 'party', component: PartyComponent },
  { path: 'finish', component: FinishGameComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
