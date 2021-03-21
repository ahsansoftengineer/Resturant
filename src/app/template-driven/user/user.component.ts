import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild('form') userForm: NgForm;
  usernamefield: string = 'Ahsan';
  emailfield: string = 'ahsan@abc.com';
  secretfield: string = 'pet';
  commentfield: string = 'No Comment';
  gendersfield: string[] = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secret: '',
    comment: '',
    gender: '',
  };

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.warn(form);
    console.log(this.userForm);
    this.user.username = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.secret = this.userForm.value.secret;
    this.user.comment = this.userForm.value.comment;
    this.user.gender = this.userForm.value.gender;
    console.log('--------------');

    console.error(this.user);
  }
  resetControl() {
    this.userForm.reset();
  }
  suggestedUserName() {
    const suggestedName = 'Super User';
    // You cannot Skip Values Otherwise it will be set it Null
    this.userForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male',
    });
    // In PatchValue you can Skip Some of the Field Without any Issue
    this.userForm.form.patchValue({
      userData: {
        username: suggestedName,
        email: 'ahsansoftengineer@gmail.com',
      },
      gender: 'female',
    });
  }
}
