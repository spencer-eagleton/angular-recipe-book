import {Component, OnInit} from '@angular/core'
import {Recipe} from "./recipe.model";

@Component({
  selector: 'recipes-component',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
  selectedRecipe!: Recipe;
  constructor() {
  }

  ngOnInit() {
  }
}
