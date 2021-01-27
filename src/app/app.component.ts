import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resturant';
  evennum:number[] = [];
  oddnum:number[] = [];
  appEventListner(Numbers:number){
    if(Numbers % 2 ===0 ){
      this.evennum.push(Numbers)
    }
    else{
      this.oddnum.push(Numbers)
    }
  }
}
