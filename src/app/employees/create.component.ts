import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidator } from '../shared/custom.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public createForm: FormGroup;
  // Creating new FormGroup using FormBuilder at OnInit Event
  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(9)] ],
      emailGroup: this.fb.group(
        {
          email: [ '', [Validators.required, CustomValidator.emailDomain('dell.com')] ],
          confirmEmail: ['', [Validators.required]],
        },
        { validator: CustomValidator.matchEmail }
      ),
      phone: [''],
      contactPreference: ['email', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required],
      }),
    });
    this.createForm.valueChanges.subscribe((value: string) => {
      this.logValidationErrors(this.createForm);
      // console.log(value);
    });
  }
  // Here Adding / Removing the Validity from Control based on Contact Preference
  onselectionChange(selectedContactPreference: string) {
    const phoneControl = this.createForm.get('phone');
    if (selectedContactPreference === 'phone') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
  // Structure for Control Errors Collection
  validationMessage = {
    name: {
      required: ' is Required',
      minlength: ' must be greater than 2 Character',
      maxlength: ' must be Less than 9 Character',
    },
    contactPreference: { required: 'select Any' },
    email: {
      required: ' is Required',
      emailDomain: ' Email Domain must be pragimtech.com',
    },
    confirmEmail: {
      required: ' is Required',
    },
    emailGroup: {
      emailMisMatch: ' & Email do not match',
    },
    phone: { required: ' is Required' },
    skillName: { required: ' is Required' },
    experienceInYears: { required: ' is Required' },
    proficiency: { required: ' is Required' },
  };
  // Form Errors Summary
  formErrors = {
    name: '',
    email: '',
    emailGroup: '',
    confirmEmail: '',
    phone: '',
    contactPreference: '',
    skillName: '',
    experienceInYears: '',
    proficiency: '',
  };
  // Method generating summary as per ValidationMessage Collection
  logValidationErrors(group: FormGroup = this.createForm): void {
    // Iterating over all the Form Builder / Form Group Controls
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (
        abstractControl &&
        !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)
      ) {
        // reteriving the validationMessage as per the formControlName (name, email...)
        const messages = this.validationMessage[key];
        // console.log('Messages :' + messages);
        // console.log('HTML Controls :' + abstractControl.errors);
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      // Checking if the Control is FormGroup then Recursively iterate again
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }
  // Calling Recursive Function on Click Event of Buttons
  RecursiveButtonClick() {
    this.logValidationErrors(this.createForm);
    console.log(this.formErrors);
  }
  // For Setting Values (Using for setting all the fields of form group)
  setValueClick(): void {
    this.createForm.setValue({
      name: 'M Ahsan',
      email: 'ahsansoftengineer@dell.com',
      confirmEmail: 'ahsansoftengineer@dell.com',
      phone: '0321-2827700',
      contactPreference: 'phone',
      skills: {
        skillName: 'C#',
        experienceInYears: 5,
        proficiency: 'advanced',
      },
    });
  }
  // For Patching Values (Using for setting some Fields of the form Group)
  patchValuesClick(): void {
    this.createForm.patchValue({
      email: 'kingKhansoftengineer@gmail.com',
      phone: '0321-2826600',
      contactPreference: 'email',
      skills: {
        skillName: 'ASP Dot Net',
        proficiency: 'intermediate',
      },
    });
  }
  submittingMethod(createForm: FormGroup) {
    console.log(createForm.value);
  }
}
