import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  // ViewEncapsulation
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Carrot', 5),
  ];
  name = 'Ahsan';
  @ViewChild('heading') headingDiv: ElementRef;
  @ContentChild('contentChild') accessChildContent: ElementRef;

  constructor() {}

  pushIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  ngOnInit(): void {
    //  console.log('Div Heading = ' + this.headingDiv.nativeElement.textContent);
    // console.log('@ContentChild = ' + this.accessChildContent.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log('ContentChild = ' + this.accessChildContent.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log('Div Heading = ' + this.headingDiv.nativeElement.textContent);
  }
}
