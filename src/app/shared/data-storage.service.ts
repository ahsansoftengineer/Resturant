import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { map, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private recipeUrl = 'https://ng-course-recipe-book-6a122-default-rtdb.firebaseio.com/recipes.json'
  constructor(private http: HttpClient, private recipeService: RecipesService) {}
  // Here we are not returning the observable because nobody interested in Subscribing this method
  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    // Put Request is for Overriding all the old data that is Stored in the FireBase Node
    this.http.put(this.recipeUrl, this.recipeService.getRecipes()).subscribe(
      response => console.log(response)
    )
  }
  // We Don't Need anything to do in Header Section to Subscribe it that is way we are subscribing it here
  fetchRecipes(): Observable<Recipe[]>{
    return this.http
      .get<Recipe[]>(this.recipeUrl)
      .pipe(
        // RxJS map Operator
        map((recipes) => {
          // JavaScript map Operator
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipies(recipes);
        })
      )
  }
}
