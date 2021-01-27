import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resturant';
  star: string = '*';
  underscore: string = '_________';
  constructor() {}
  func() {
    for (let i = 0; i < 6; i++) {
      console.log(('_'.repeat(9-i)) + ('*'.repeat(i+2)) +'*');
    }
  }
}
