import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  // user = { id: 0, name: '' };

  allowEdit: boolean = false;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.user.id = this.route.snapshot.params['id'];
    // this.user.name = this.route.snapshot.params['name'];
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    // Required When ever your Page Internally Reload
    // The Subscribe Method Pick up the Changes and Refresh the Data within the Page
    // It Refresh Only the Data Not Whole Page
      this.paramsSubscription = this.route.params.subscribe((params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        console.log(params);

      });
      this.route.fragment.subscribe(
        (fragment: any) => console.log(JSON.stringify(fragment))
        // "loading"
      );
      this.route.queryParams.subscribe((queryParams: Params) => {
        // Reteriving the Specific Query Param
        this.allowEdit = queryParams['allowEdit'] === '1';
        // Printing All the Queries Param
        console.log(JSON.stringify(queryParams));
        // {"allowEdit":"1","disabled":"false","king":"Lion"}
      });

    console.warn('Printing Query String, Query Params, Fragement');
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  dynamicNavigation(id: number) {
    // Complex Calculation
    this.router.navigate(['/user', id, 'edit'], {
      queryParams: { allowEdit: 1, disabled: false, king: 'Lion' },
      fragment: '102',
    });
    // Result http://localhost:4200/user/1/edit?allowEdit=1&disabled=false&king=Lion#102
  }
  paramsHandling(){
    this.router.navigate(['101/ahsan'], { relativeTo: this.route, queryParamsHandling: 'preserve' });

  }
}
