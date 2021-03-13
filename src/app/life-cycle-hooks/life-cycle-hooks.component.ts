import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css'],
})
export class LifeCycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
  //      SimpleChanges is an Angular/Core feature that can be used to see the changes and a few more details of the
  //  declared property names in a component. And also it needs to be used in the Angular
  //  ngOnChange method to see the values changes and to do relevant things.
  //      Simply in the ngOnChange is fire when declared property values are changed.
  //  So in that method, we can set this as a param to store the data. like this`;

   // Simple Changes Object
    const previous = changes.previousValue;
    const current = changes.currentValue;
    const isfirstChange = changes.isFirstChange;
    const firstChange = changes.firstChange;
  }
  ngOnInit() {
    `ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
  Implement this interface to execute custom initialization logic after your directive's data-bound properties have been initialized. ` +
      `This event it self calling ngOnChanges `;
  }
  ngDoCheck() {
    `When you want to check a property that is going to be change `;
  }
  ngAfterContentChecked() {
    `A callback method that is invoked immediately after the
  default change detector has completed checking all of the directive's content.`;
  }
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnDestroy() {}
}
