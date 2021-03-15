import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: '../recipe-list/recipe-list.component.html',
  styleUrls: ['../recipe-list/recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor(private recipesService: RecipesService) {}
  ngOnInit(): void {
    this.recipies = this.recipesService.getRecipes();
  }
  public recipies: Recipe[];
  @Output()
  // selectedRecipeEvent = new EventEmitter<Recipe>();
  recipeClicked(selectedRecipe: Recipe) {
    this.recipesService.recipeSelected.emit(selectedRecipe);
  }
}
