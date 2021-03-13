    import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

    @Component({
      selector: 'app-shopping-edit',
      templateUrl: './shopping-edit.component.html',
      styleUrls: ['./shopping-edit.component.css']
    })
    export class ShoppingEditComponent implements OnInit, AfterContentInit {
      ngOnInit(): void {
        // console.log('ContentChild = ' + this.accessChildContent.nativeElement.textContent);
      }
      @ContentChild('contentChild') accessChildContent: ElementRef;
      ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log('ContentChild = ' + this.accessChildContent.nativeElement.textContent);
      }
    }
