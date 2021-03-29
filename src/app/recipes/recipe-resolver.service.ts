import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    // Here the Fetch Method is Returning Observable<Recipe[]>
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
