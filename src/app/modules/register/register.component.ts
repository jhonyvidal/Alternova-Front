import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.sevice';
import { Router } from '@angular/router';
import { passwordsMatchValidator } from '../../shared/helper/validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export default class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        passwordHash: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      { Validators: passwordsMatchValidator }
    );
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registerForm.get(field);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      this.userService.post(this.registerForm.value).subscribe(
        (response) => {
          if (response) {
            this.router.navigate(['/home']);
          } else {
            alert('Ha ocurrido un error');
          }
        },
        (error) => {
          if(error.error.Message === "Email address is already registered."){
            alert('El correo ya se encuentra registrado.');
          }else{
            alert('Ha ocurrido un error.');
          }
        }
      );
    }
  }
}
