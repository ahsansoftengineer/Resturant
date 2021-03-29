import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: 'edit/:id',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id',
        component: RecipeDetailsComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  { path: 'shoping-list', component: ShoppingListComponent },
  // { path: '**', component: ShoppingListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
