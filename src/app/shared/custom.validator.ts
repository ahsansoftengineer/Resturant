import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  // Closure anonymous Function inside another Function
  public static emailDomain(domainName: string = 'dell.com') {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const domain: string = email.substring(email.lastIndexOf('@') + 1);
      // Here we are checking two things
      // 1. email is blank means Validation Pass (No need to display message)
      // 2. domain match means Validation Pass (No need to display message)
      // Indicating No Error (Validation Pass)
      if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
        return null;
      }
      // Indicating (Validation Fails) (Display the Message)
      else {
        return { emailDomain: true };
      }
    };
  }
  public static matchEmail(
    groupControl: AbstractControl
  ): { [key: string]: any } | null {
    const emailControl = groupControl.get('email');
    const confirmEmailControl = groupControl.get('confirmEmail');
    if (
      emailControl.value === confirmEmailControl.value ||
      confirmEmailControl.pristine
    ) {
      return null;
    } else {
      return { emailMisMatch: true };
    }
  }
  // Structure for Control Errors Collection
  public static validationMessage = {
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
  };
  // Form Errors Summary
  public static formErrors = {
    name: '',
    email: '',
    emailGroup: '',
    confirmEmail: '',
    phone: '',
    contactPreference: '',
  };
}
