import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    OnChanges,
    OnInit,
    OnDestroy {
  constructor() {
    console.warn('Constructor Called!');
  }
  @ViewChild('viewchildparaEG') viewchildparadec: ElementRef;
  @ContentChild('contentchildparaEG') contentchildparadec: ElementRef;
  ngOnInit() {
    console.log('OnInit Called!');
  }
  ngDoCheck() {
    console.warn('DoCheck Called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges Called!' + changes);
  }
  ngAfterContentInit() {
    console.log('AfterContentInit Called!');
    // console.log(this.contentchildparadec.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked Called!');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit Called!');
    console.log(this.viewchildparadec.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.warn('OnDestroy Called!');
  }

  DestroyedFirst() {
    this.serverElements.splice(0, 1);
  }

  title = 'Resturant';
  serverElements = [
    { type: 'server', name: 'Test Server', content: 'Just a Test' },
  ];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
