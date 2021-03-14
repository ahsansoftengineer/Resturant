import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FelexibleDirective } from './directive/felexible.directive';
import { SimpleDirective } from './directive/simple.directive';
import { CustomDirective } from './directive/custom.directive';
import { CustomStructuralDirective } from './directive/custom-structural.directive';
import { DirectiveExampleComponent } from './directive/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FelexibleDirective,
    SimpleDirective,
    CustomDirective,
    CustomStructuralDirective,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Required for Two way databinding
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
