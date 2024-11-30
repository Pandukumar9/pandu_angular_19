import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.matchPasswords('password', 'confirmPassword') }
    );
  }

  isFieldInvalid(field: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (passwordControl && confirmPasswordControl) {
        const error = passwordControl.value === confirmPasswordControl.value ? null : { mismatch: true };
        confirmPasswordControl.setErrors(error);
      }
    };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Data:', this.registerForm.value);
      // Call your registration API or service here
    }
  }
}
