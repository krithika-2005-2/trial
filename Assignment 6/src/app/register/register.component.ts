import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
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
    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      personalEmail: [''],
      mobileNumber: [''],
      postalAddress: [''],
      gender: ['Male'], // default: Male
      country: [''],
      city: [''],
      designation: [1], // default: first designation
      basicPay: [0],
      needTransportation: [true], // default: Yes
      notes: [''],
      username: [''],
      password: [''],
      // confirmPassword: [''] // ❌ Not used in API – commented out
    });
  }

  onCountryChange(country: string) {
    this.availableCities = this.cities[country] || [];
    this.myForm.get('city')?.setValue('');
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

      console.log('Sending employee data:', apiEmployee);

      this.empService.addEmployee(apiEmployee).subscribe({
        next: () => {
          alert('✅ Employee registered successfully');
          this.myForm.reset(); // Clear form
          this.router.navigate(['/employee-list']);
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to register employee');
        }
      });
    } else {
      alert('⚠️ Please complete the form');
    }
  }
}
