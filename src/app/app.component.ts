import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resturant';
  allowNewServer = true;
  porp : string = 'Pre defined text';
  a = false;
  bcolor = '';
  red = 'red';
  green = 'green'
  printedText: string;
  serverOnline = false;
  fruits:string[] = ['apple', 'banana', 'orange', 'mango'];
  dpara = false; // Assignment ngIf Para

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 3000);
    this.log.pop();
}
  changeText = 'Old text';
  conditionallyLoads = false;
  myfunc() {
    this.changeText = 'New text';
  }
  myDollar(event: Event) {
    this.printedText = <string>(<HTMLInputElement>event.target).value;
  }
  // Part 38 Styling Elements
  serverfunc(){
    this.serverOnline = Math.random() > 0.5;
    this.bcolor = Math.random() > 0.5 ? 'green' : 'red';
   }
  // Part 40 ngFor
  addFruit(){
    this.fruits.push('çhiku')
  }
  i:number = 0;
  log = [{sNo:0 ,date: Date.now()}]
  logInfo(){
    this.dpara = !this.dpara;
    this.log.push({ sNo: ++this.i, date: Date.now()})
  }
}
