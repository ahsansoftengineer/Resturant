import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: '../recipe-list/recipe-list.component.html',
})
export class RecipeListComponent {
  public recipies: Recipe[];
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private activRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.recipies = this.recipesService.getRecipes();
  }
  onNewRecipe() {
    // http://localhost:4200/recipes/new
    this.router.navigate(['new'], { relativeTo: this.activRoute });
  }
}
