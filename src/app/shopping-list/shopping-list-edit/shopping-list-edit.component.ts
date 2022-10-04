import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.editIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }
  ngOnDestroy() {
    if(this.subscription && !this.subscription.closed)
      this.subscription.unsubscribe();  }
}
