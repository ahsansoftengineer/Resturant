import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  selectedRecipe: Recipe;
  constructor(public recipeService: RecipesService) { }
  ngOnInit(): void {
      this.recipeService.recipeSelected.subscribe(
        (recipe: Recipe) => this.selectedRecipe = recipe
      )
  }
}
