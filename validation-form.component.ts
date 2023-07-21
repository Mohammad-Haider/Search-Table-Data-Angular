import { FormDataService } from './../services/form-data.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordNotMatchValidator } from './ValidatorFunctions';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css'],
})
export class ValidationFormComponent {
  //variables
  passwordStrength: string = '';
  constructor(private dataService: FormDataService) {} // Inject the DataSharingServiceService

  SaveInfo() {
    // add in ValidationForm.component.ts
    console.warn(this.InfoForm.value);

    this.dataService.addData(this.InfoForm.value);

    this.InfoForm.reset();
  }

  InfoForm = new FormGroup(
    {
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern('[a-zA-Z]+$'),
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern('[a-zA-Z]+$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]), //, PasswordStrengthValidator]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: PasswordNotMatchValidator, //use "InfoForm.hasError('passwordNotMatched')" in .component.html file as custom validation error is present on the entire form group (InfoForm)
    }
  );

  get first_name() {
    return this.InfoForm.controls['first_name'];
  }

  get last_name() {
    return this.InfoForm.controls['last_name'];
  }

  get email() {
    return this.InfoForm.controls['email'];
  }

  get password() {
    return this.InfoForm.controls['password'];
  }

  get confirmPassword() {
    return this.InfoForm.controls['confirmPassword'];
  }

  checkPasswordStrength(password: string): void {
    const passwordStrengthRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    const mediumStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordStrengthRegex.test(password)) {
      this.passwordStrength = 'Strong';
    } else if (mediumStrengthRegex.test(password)) {
      this.passwordStrength = 'Medium';
    } else {
      this.passwordStrength = 'Weak';
    }
  }
}
