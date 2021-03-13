import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector:'app-recipes',
  templateUrl: '../recipes/recipes.component.html',
  styleUrls: ['../recipes/recipes.component.css']
})
export class RecipesComponent{
  selectedRecipe: Recipe = null;
  constructor(){}
  ClickedRecipe: string = 'Nothing Clicked'
  recipeForwarder(selectedRecipe:Recipe){
    this.selectedRecipe = selectedRecipe
  }
}
