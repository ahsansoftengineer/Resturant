import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor() { }
  private recipies: Recipe[] = [
    new Recipe('Chana Chaat', 'Cholay', 'assets/Images/1.jpeg'),
    new Recipe('Kurma', 'Beaf', 'assets/Images/2.jpeg'),
    new Recipe('Roast', 'Chicken', 'assets/Images/3.jpeg'),
  ];
  public recipeSelected = new EventEmitter<Recipe>();
  // We are returning a copy of recipe
  public getRecipes(): Recipe[]{
    return this.recipies.slice()
  }
}
