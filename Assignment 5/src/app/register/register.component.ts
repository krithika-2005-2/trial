// register.component.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  employee: any = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    personalEmail: '',
    mobileNumber: '',
    postalAddress: '',
    gender: '',
    country: '',
    city: '',
    designation: '',
    basicPay: null,
    username: '',
    password: '',
    confirmPassword: '',
    notes: ''
  };

  constructor(private empService: EmployeeService,
    private router:Router
  ) {}

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

  onCountryChange(country: string) {
    this.availableCities = this.cities[country] || [];
    this.employee.city = '';
  }
  

  onSubmit(form: NgForm) {
    console.log('Form submitted!', form.valid);
    if (form.valid) {
      const apiEmployee = {
        
        ...this.employee, // spread existing fields
        dateOfBirth: this.employee.dateOfBirth + 'T00:00:00', // Add time part to date
        designation: Number(this.employee.designation), // Ensure integer
        gender: Number(this.employee.gender),           // Ensure integer
        basicPay: Number(this.employee.basicPay),       // Ensure integer/number
      needTransportation: this.employee.needTransportation  
      };
  
      console.log('Sending employee data:', apiEmployee);

      this.empService.addEmployee(apiEmployee).subscribe({

    next: (res: any) => {
      alert('Employee registered successfully');
      form.resetForm(); 
      this.router.navigate(['/employee-list'])
    },
    error: (err: any) => {
      console.error(err);
      alert('Failed to register employee');
    }
  });
}
}
}

