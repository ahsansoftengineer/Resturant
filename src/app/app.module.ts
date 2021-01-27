import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Required for Two way databinding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
