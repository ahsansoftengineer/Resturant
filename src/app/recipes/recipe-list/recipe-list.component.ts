import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: '../recipe-list/recipe-list.component.html',
  styleUrls: ['../recipe-list/recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor() {}
  recipies: Recipe[] = [
    new Recipe('Chana Chaat', 'Cholay', 'assets/Images/1.jpeg'),
    new Recipe('Kurma', 'Beaf', 'assets/Images/2.jpeg'),
    new Recipe('Roast', 'Chicken', 'assets/Images/3.jpeg'),
  ];
  @Output()
  selectedRecipeEvent = new EventEmitter<Recipe>();
  recipeClicked(selectedRecipe: Recipe){
    this.selectedRecipeEvent.emit(selectedRecipe);
  }
}
