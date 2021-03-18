import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  current: string;
  dropdown:boolean = false;
  constructor(public recipeService: RecipesService) { }
  ngOnInit(): void {
      this.recipeService.recipeSelected.subscribe(
        (recipe: Recipe) => this.selectedRecipe = recipe
      )
  }
  addToShoppingList(currentPage:string){
    this.current = 'toshopinglist';
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients)


  }
}
