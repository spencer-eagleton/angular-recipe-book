import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'this is a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg' ),
    new Recipe('Test Recipe 2', 'this is another test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg' ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
