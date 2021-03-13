    import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

    @Component({
      selector: 'app-shopping-edit',
      templateUrl: './shopping-edit.component.html',
      styleUrls: ['./shopping-edit.component.css']
    })
    export class ShoppingEditComponent implements OnInit, AfterContentInit {
      @ContentChild('contentChild') accessChildContent: ElementRef;
      constructor(){}
      @ViewChild('name') itemName: ElementRef;
      @ViewChild('amount') amount: ElementRef;
      @Output()ingredientEmitter = new EventEmitter<Ingredient>();

      ngOnInit(): void {
        // console.log('ContentChild = ' + this.accessChildContent.nativeElement.textContent);
      }
      ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log('ContentChild = ' + this.accessChildContent.nativeElement.textContent);
      }
      AddItems(){
        const itemname = this.itemName.nativeElement.value
        const amount = this.amount.nativeElement.value
        console.log(itemname + '  ' + amount)
        this.ingredientEmitter.emit(new Ingredient(itemname, amount))
      }
    }
