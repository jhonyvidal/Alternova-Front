import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//validation to confirm the password are iqual
export const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordsMismatch: true };
    }
  
    return null;
};