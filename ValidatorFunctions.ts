import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const PasswordNotMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (
    password &&
    confirmPassword &&
    password?.value != confirmPassword?.value
  ) {
    //if not equal return error message
    return { passwordNotMatched: true };
  }
  return null;
};
