import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { CustomValidator } from '../shared/custom.validator';
import { IEmployee, ISkill } from '../model/interfaces/interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}
  public employee: IEmployee;
  public createForm: FormGroup;
  public skillArray: AbstractControl[];
  // Creating new FormGroup using FormBuilder at OnInit Event
  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(9)],
      ],
      emailGroup: this.fb.group(
        {
          email: [
            '',
            [
              Validators.required,
              CustomValidator.emailDomain('pragimtech.com'),
            ],
          ],
          confirmEmail: ['', [Validators.required]],
        },
        { validator: CustomValidator.matchEmail }
      ),
      phone: [''],
      contactPreference: ['email', Validators.required],
      skills: this.fb.array([this.addSkillFormGroup()]),
    });
    this.createForm.valueChanges.subscribe((value: string) => {
      this.logValidationErrors(this.createForm);
      // console.log(value);
    });
    this.skillArray = (<FormArray>this.createForm.get('skills')).controls;

    // Here we are Getting the Users By ID on the First Initialization of Form
    this.activatedRoute.paramMap.subscribe((params) => {
      const empId = +params.get('id');
      if (empId) {
        this.getEmployee(empId);
      } else {
        this.employee = {
          id: null,
          name: '',
          contactPreference: '',
          email: '',
          phone: null,
          skills: [],
        };
      }
    });
  }
  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      (employee: IEmployee) => {
        this.editEmployee(employee);
        this.employee = employee;
      },
      (err: any) => console.log(err)
    );
  }
  // Populating all the filelds for Editing using patchValue
  editEmployee(employee: IEmployee) {
    this.createForm.patchValue({
      name: employee.name,
      contactPreference: employee.contactPreference,
      phone: employee.phone,
      emailGroup: {
        email: employee.email,
        confirmEmail: employee.email,
      },
    });
    this.createForm.setControl(
      'skills',
      this.setExistingSkills(employee.skills)
    );
    this.createForm.markAsDirty();
    this.createForm.markAsTouched();
  }
  // Adding the Skills as per the Record in Form Group
  setExistingSkills(skills: ISkill[]): FormArray {
    const formArray = new FormArray([]);
    skills.forEach((skill) => {
      formArray.push(
        this.fb.group({
          skillName: skill.skillName,
          experienceInYears: skill.experienceInYears,
          proficiency: skill.proficiency,
        })
      );
    });
    this.skillArray = formArray.controls;
    return formArray;
  }
  deleteSkill(indexSkill: number) {
    const skillsFormArray = <FormArray>this.createForm.get('skills');
    skillsFormArray.removeAt(indexSkill);
    skillsFormArray.markAsDirty();
    skillsFormArray.markAsTouched();
  }
  addSkillButtonClick() {
    (<FormArray>this.createForm.get('skills')).push(this.addSkillFormGroup());
  }
  // Recursively Adding FormGroup Dynamically
  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required],
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
      emailDomain: ' domain must be pragimtech.com',
    },
    confirmEmail: {
      required: ' is Required',
    },
    emailGroup: {
      emailMisMatch: ' & Email do not match',
    },
    phone: { required: ' is Required' },
  };
  // Form Errors Summary
  formErrors = {
    name: '',
    email: '',
    emailGroup: '',
    confirmEmail: '',
    phone: '',
    contactPreference: '',
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
        (abstractControl.touched ||
          abstractControl.dirty ||
          abstractControl.value !== '')
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
      emailGroup: {
        email: 'ahsansoftengineer@dell.com',
        confirmEmail: 'ahsansoftengineer@dell.com',
      },
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
  onSubmit() {
    this.mapFormValuesToEmployeeModel();
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => this.router.navigate(['employees/list']),
        (err) => console.log(err)
      );
    } else {
      this.mapFormValuesToEmployeeModel();
      this.employeeService.addEmployee(this.employee).subscribe(
        () => this.router.navigate(['employees/list']),
        (err) => console.log(err)
      );
    }
  }
  mapFormValuesToEmployeeModel() {
    this.employee.name = this.createForm.value.name;
    this.employee.contactPreference = this.createForm.value.contactPreference;
    this.employee.email = this.createForm.value.emailGroup.email;
    this.employee.phone = this.createForm.value.phone;
    this.employee.skills = this.createForm.value.skills;
  }
}
