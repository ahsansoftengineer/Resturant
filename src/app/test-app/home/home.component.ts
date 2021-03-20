import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
  // There are two type of Observable
  observableSubscription: Subscription;
  myCustomObservableSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.observableSubscription = interval(1000).subscribe((count) => {
      console.log('Could UnSubscribe : ' + count);
    });
    // This Observable will not stop even you navigage away
    // interval(2500).subscribe((count) =>
    //   console.log("Counld't UnSubscribe : " + count)
    // );

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 500);
    });

    this.myCustomObservableSubscription = customIntervalObservable.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
    this.myCustomObservableSubscription.unsubscribe();
  }
}
