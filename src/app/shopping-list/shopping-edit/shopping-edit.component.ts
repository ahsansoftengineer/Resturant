import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ContentChild('contentChild') accessChildContent: ElementRef;
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('name') itemName: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  ngOnInit(): void {}
  getValue(element: ElementRef) {
    return element.nativeElement.value;

  }
  addIngredient() {
    const ingredient: Ingredient = {
      name: this.getValue(this.itemName),
      amount: this.getValue(this.amount)
    }
    this.shoppingService.addIngredient(ingredient);
  }
}
