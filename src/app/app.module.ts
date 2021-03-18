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
import { DropdownDirective } from './directive/dropdown.directive';

// Import for Account & Services
import { AccountComponent } from './account/account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { AccountService } from './account/account.service';
import { LoggingService } from './account/logging.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './routing-test/user/user.component';
import { DetailComponent } from './routing-test/user/detail/detail.component';
import { BasicComponent } from './routing-test/user/basic/basic.component';

const routes: Route[] = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: ':id', component: DetailComponent },
      { path: ':id/:name', component: BasicComponent },
    ],
  },
  { path: 'admin/:id/:name', component: UserComponent },
];

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
    DirectiveExampleComponent,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    UserComponent,
    DetailComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule, // Required for Two way databinding
  ],
  // AccountService & LoggingService is not the Part of Resturant
  providers: [AccountService, LoggingService, ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
