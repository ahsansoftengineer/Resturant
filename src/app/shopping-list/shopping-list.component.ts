import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  igChangeSubs: Subscription;
  constructor(private shoppingService: ShoppingService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSubs = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.igChangeSubs.unsubscribe();
  }
  onEditItem(index: number){
    this.shoppingService.startEditing.next(index)
  }
}
