import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm: FormGroup;

  designations = [
    { id: 1, title: 'Software Engineer' },
    { id: 2, title: 'QA Engineer' },
    { id: 3, title: 'Business Analyst' },
    { id: 4, title: 'Project Manager' },
    { id: 5, title: 'UI/UX Designer' }
  ];

  countries = ['India', 'USA', 'UK'];
  cities: { [key: string]: string[] } = {
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    UK: ['London', 'Manchester', 'Liverpool']
  };
  availableCities: string[] = [];

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router
  ) {
    this.myForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        dateOfBirth: ['', [Validators.required]],
        personalEmail: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
        mobileNumber: ['', [Validators.required, Validators.maxLength(20)]],
        postalAddress: ['', [Validators.required, Validators.maxLength(250)]],
        gender: ['Male', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
        designation: ['', Validators.required],
        basicPay: [null, [Validators.required, Validators.min(5000), Validators.max(50000)]],
        needTransportation: [true, Validators.required],
        username: ['', [Validators.required, Validators.maxLength(15)]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-={}\\[\\]|:;"\'<>,.?/~`]).{6,}$')
          ]
        ],
        
        confirmPassword: ['', Validators.required],
        notes: ['', Validators.maxLength(250)]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  };

  onCountryChange(country: string) {
    this.availableCities = this.cities[country] || [];
    this.myForm.get('city')?.setValue('');
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;

      const apiEmployee = {
        ...formData,
        dateOfBirth: formData.dateOfBirth + 'T00:00:00',
        designation: Number(formData.designation),
        gender: formData.gender === 'Male' ? 1 : 0,
        basicPay: Number(formData.basicPay),
        needTransportation: formData.needTransportation
      };

      this.empService.addEmployee(apiEmployee).subscribe({
        next: () => {
          alert('✅ Employee registered successfully');
          this.myForm.reset();
          this.router.navigate(['/employee-list']);
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to register employee');
        }
      });
    } else {
      this.myForm.markAllAsTouched();
      alert('⚠️ Please fix validation errors before submitting.');
    }
  }
}
