import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';


@NgModule({
  declarations: [GameControlComponent, OddComponent, EvenComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
