import {Component, OnInit} from '@angular/core'
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'recipes-component',
  templateUrl: './recipes.component.html',
  // styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  constructor() {
  }

  ngOnInit() {

  }
}
