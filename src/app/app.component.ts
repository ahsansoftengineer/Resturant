import { Component } from '@angular/core';
import { AccountService } from './account/account.service';
// import * as rxjs from 'rxjs';
// import { Observable } from 'rxjs';
// import { rx } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resturant';
  button = document.querySelector('button');
  currentPages: string = 'shopping-list';
  accounts: {name:string, status:string}[]
  constructor(private accountService: AccountService) {
    this.accounts = accountService.accounts
  }

  observer = {
    // Called for Each Items
    next: function (value) {
      console.log(value);
    },
    // Called when Error Occur and Terminate the Process
    error: function (err) {
      console.log(err);
    },
    // Called when the transmission of data is Completed
    complete: function () {
      console.log('Complete');
    },
  };
  ngOnInit(): void {
    // We can pass the Arrow Function or Object that of Oberserver to the Subscribe method
    // Rx.Observable.fromEvent(this.button, 'click')
    //   .throttleTime(1000)
    //   .map((data) => {
    //     return data.clientY;
    //   })
    //   .subscribe(this.observer);
    // rxjs.Observable.create(function (obs) {
    //   obs.next('A Value');
    //   obs.error('Error Print');
    //   obs.complete();
    // }).subcribe(this.observer);
    // this.button.addEventListener('click', (event) => console.log(event));
  }
  currentPage(page: string) {
    console.log(page);
    this.currentPages = page;
  }
}
