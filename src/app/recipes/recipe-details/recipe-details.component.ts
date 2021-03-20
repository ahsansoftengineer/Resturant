import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  current: string;
  dropdown: boolean = false;
  id: number;
  constructor(
    public recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Only for First Time using URL
    // const id = this.activatedRoute.snapshot['id']

    // When ever the URL Changes it Updates the Data by Subscribing to it
    const id = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    });
    // By Subscribing to Other Service
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => this.selectedRecipe = recipe
    // )
  }
  addToShoppingList(currentPage: string) {
    this.current = 'toshopinglist';
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }
  onEditRecipe() {
    // http://localhost:4200/recipes/edit/0
    // this.router.navigate(['edit'], { relativeTo: this.activatedRoute });

    // http://localhost:4200/recipes/2/edit
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });

    // http://localhost:4200/recipes/edit/2
    this.router.navigate(['../edit', this.id], { relativeTo: this.activatedRoute });
  }
}
