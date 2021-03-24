import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('sForm') shoppingForm: NgForm;
  subscription: Subscription;
  editItemIndex: number;
  editMode: boolean = false;
  ingredient: Ingredient;

  ngOnInit(): void {
    this.subscription = this.shoppingService.startEditing.subscribe((index) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.ingredient = this.shoppingService.getIngredient(index);
      this.shoppingForm.setValue({
        name: this.ingredient.name,
        amount: this.ingredient.amount,
      });
    });
  }
  onSubmit(shoppingForm: NgForm) {
    const controls = shoppingForm.value;
    // const ingredient = { name: controls.name, amount: controls.amount };
    // const ingredient = new Ingredient(controls.name,controls.amount);
    // const ingredient: Ingredient = { name: controls.name, amount: controls.amount };
    const ingredient: Ingredient =  new Ingredient(controls.name,controls.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex, ingredient)
    } else {
      this.shoppingService.addIngredient(ingredient)
    }
    this.resetForm();
  }
  onDelete(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.resetForm();
  }
  resetForm(){
    this.editMode = false;
    this.shoppingForm.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
