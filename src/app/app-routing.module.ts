import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  // PreloadAllModules,
  // NoPreloading,
} from '@angular/router';
import { CustomPreloadingServiceService } from './custom-preloading-service.service';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
const setPreLoad: boolean = false;
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'}
  {
    path: 'employees',
    data: { preload: setPreLoad },
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingServiceService, // Only the Specified Module Pre Load
      // preloadingStrategy: NoPreloading, // Never PreLoad
      // preloadingStrategy: PreloadAllModules, // Always Preload All Module
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // setPreLoad = true; // Cannot Conditionally set value here
}
