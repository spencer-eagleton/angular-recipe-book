import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'this is a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg', [new Ingredient('Ingredient1', 1), new Ingredient('Ingredient2', 20),] ),
    new Recipe('Test Recipe 2', 'this is another test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg', [new Ingredient('Ingredient1', 1), new Ingredient('Ingredient2', 6),] ),
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
