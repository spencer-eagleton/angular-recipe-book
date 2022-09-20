import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg' ),
    new Recipe('Test Recipe', 'this is a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg' ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
