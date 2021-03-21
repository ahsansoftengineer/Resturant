import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor() {}
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Carrot', 5),
  ];
  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  ingredientsChanged = new Subject<Ingredient[]>();
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
