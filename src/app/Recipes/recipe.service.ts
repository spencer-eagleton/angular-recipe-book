import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'this is a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg', [new Ingredient('Ingredient1', 1), new Ingredient('Ingredient2', 20),] ),
    new Recipe('Test Recipe 2', 'this is another test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg', [new Ingredient('Ingredient1', 1), new Ingredient('Ingredient2', 6),] ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
