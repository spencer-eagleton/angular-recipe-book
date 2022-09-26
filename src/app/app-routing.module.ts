import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./Recipes/Recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./Recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./Recipes/recipe-detail/recipe-detail.component";

const appRoutes : Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent },
      {path: ':id', component: RecipeDetailComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class  AppRoutingModule {

}
