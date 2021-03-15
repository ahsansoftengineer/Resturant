import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Carrot', 5),
  ];
  public getIngredients(): Ingredient[]{
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  IngredientStatus = new EventEmitter<Ingredient>();
}
