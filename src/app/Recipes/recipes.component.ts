import {Component, OnInit} from '@angular/core'
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'recipes-component',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe!: Recipe;
  constructor() {
  }

  ngOnInit() {
  }
}
