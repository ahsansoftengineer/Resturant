import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private shoppingService: ShoppingService) { }
  private recipies: Recipe[] = [
    new Recipe('Chana Chaat', 'Cholay', 'assets/Images/1.jpeg',
    [
      new Ingredient('Cholay', 1),
      new Ingredient('Yogart', 20),
      new Ingredient('Spicies', 1),
    ]),
    new Recipe('Kurma', 'Beaf', 'assets/Images/2.jpeg',
    [
      new Ingredient('Beaf', 1),
      new Ingredient('Yogart', 20),
      new Ingredient('Gram Masala', 1),
    ]),
    new Recipe('Roast', 'Chicken', 'assets/Images/3.jpeg',
    [
      new Ingredient('Chiken', 1),
      new Ingredient('Yogart', 20),
      new Ingredient('Masala', 2),
    ]),
  ];
  public recipeSelected = new EventEmitter<Recipe>();
  // We are returning a copy of recipe
  public getRecipes(): Recipe[]{
    return this.recipies.slice()
  }
  public getRecipe(index: number){
    return this.recipies.slice()[index];
  }
  public addRecipes(recipe: Recipe){
    this.recipies.push(recipe);
  }
  public addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients)
  }
}
