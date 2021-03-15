import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Component({
  selector:'app-recipes',
  templateUrl: '../recipes/recipes.component.html',
  styleUrls: ['../recipes/recipes.component.css'],
  providers:[RecipesService]
})
export class RecipesComponent{
  selectedRecipe: Recipe = null;
  constructor(){}
  ClickedRecipe: string = 'Nothing Clicked'
  recipeForwarder(selectedRecipe:Recipe){
    this.selectedRecipe = selectedRecipe
  }
}
