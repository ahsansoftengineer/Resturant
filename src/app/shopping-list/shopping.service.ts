import { EventEmitter, Injectable } from '@angular/core';
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

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }
    // This Short hand Syntax would Delivered all the object into a Package and in One Short (Not One by One)
    this.ingredients.push(...ingredients);
    // This is for Refreshing the List
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
