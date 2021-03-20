import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: [],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // http://localhost:4200/recipes/2/edit
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // Here we are Checking whether the User is not directly land on the page without providing the ID
      this.editMode = params['id'] != null;
      console.log(this.editMode);
    });
  }
}
