      import { Component, OnDestroy, OnInit } from '@angular/core';
      import { Observable, Subscription } from 'rxjs';
      import { filter, map } from 'rxjs/operators';
      import { UserService } from '../user.service';

      @Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styles: [],
      })
      export class HomeComponent implements OnInit, OnDestroy {
        myCustomObservableSubscription: Subscription;
        userActive: boolean = false;
        constructor(private userService: UserService) {}
        ngOnInit(): void {
          this.userService.activatedEmitter.subscribe(
            (data: boolean) => (this.userActive = data)
          );
          const customIntervalObservable = Observable.create((observer) => {
            let count = 0;
            // The Comment Part Shows that setInterval is not Stopping even after (Complete / Error) Events Triggered of CustomObservable
            setInterval(() => {
              observer.next(count);
              if (count > 5) {
                observer.error(new Error('This is Error Message'));
                // console.log('Out Side of the Error Message');
              }
              if (count > 3) {
                observer.complete(() => console.log('Now Completed'));
                // console.log('Out side of the Complete Message');
              }
              count++;
            }, 1000);
          });

          this.myCustomObservableSubscription = customIntervalObservable
            .pipe(
              filter((data: number) => {
                return data % 2 === 0;
              }),
              map((data: number) => {
                return 'Round : ' + (data + 1);
              })
            )
            .subscribe(
              (data) => {
                console.log(data);
              },
              (error) => {
                console.warn('Error has Handle : ' + error);
              },
              () => {
                console.log('Observable has Completed with out Raising Error');
              }
            );
        }
        ngOnDestroy(): void {
          this.myCustomObservableSubscription.unsubscribe();
        }
      }
