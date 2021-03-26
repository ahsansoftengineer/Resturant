import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resturant';
  filter = 'online';
  mylist: { filter: string; content: string }[] = [
    { filter: 'online', content: 'This Fighter 97' },
    { filter: 'offline', content: 'This 98' },
    { filter: 'online', content: 'This of Fighter 99' },
    { filter: 'offline', content: 'King of Fighter 100' },
    { filter: 'online', content: 'This King Fighter 120' }
  ];

  onAddItem(){
    this.mylist.push(
      { filter: 'online', content: '2K2' },
    )
  }
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('online')
    }, 2000)
  })
}
