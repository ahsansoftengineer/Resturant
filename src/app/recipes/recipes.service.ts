import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private shoppingService: ShoppingService) { }
  recipeChanged = new Subject<Recipe[]>();
  private recipies: Recipe[] = []

  // private recipies: Recipe[] = [
  //   new Recipe('Chana Chaat', 'Cholay', 'assets/Images/1.jpeg',
  //   [
  //     new Ingredient('Cholay', 1),
  //     new Ingredient('Yogart', 20),
  //     new Ingredient('Spicies', 1),
  //   ]),
  //   new Recipe('Kurma', 'Beaf', 'assets/Images/2.jpeg',
  //   [
  //     new Ingredient('Beaf', 1),
  //     new Ingredient('Yogart', 20),
  //     new Ingredient('Gram Masala', 1),
  //   ]),
  //   new Recipe('Roast', 'Chicken', 'assets/Images/3.jpeg',
  //   [
  //     new Ingredient('Chiken', 1),
  //     new Ingredient('Yogart', 20),
  //     new Ingredient('Masala', 2),
  //   ]),
  // ];

  setRecipies(recipes: Recipe[]){
    this.recipies = recipes
    this.recipeChanged.next(this.recipies.slice())
  }
  // We are returning a copy of recipe
  getRecipes(): Recipe[]{
    return this.recipies.slice()
  }
  getRecipe(index: number){
    return this.recipies.slice()[index];
  }
  addRecipe(recipe: Recipe){
    this.recipies.push(recipe);
    this.recipeChanged.next(this.recipies.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipies[index] = newRecipe
    this.recipeChanged.next(this.recipies.slice())
  }
  deleteRecipe(index: number){
    this.recipies.splice(index, 1)
    this.recipeChanged.next(this.recipies.slice())
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients)
  }

}
