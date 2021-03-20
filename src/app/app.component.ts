import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resturant';
  button = document.querySelector('button');
  currentPages: string = 'shopping-list';

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
  ngOnInit(): void {}
  currentPage(page: string) {
    console.log(page);
    this.currentPages = page;
  }
}
