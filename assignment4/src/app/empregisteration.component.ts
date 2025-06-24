import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-empregisteration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './empregisteration.component.html',
  styleUrls: ['./empregisteration.component.css']
})
export class EmpregisterationComponent {
  employee = {
    employeeID: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    personalEmail: '',
    postalAddress: "",
    gender:0 ,
    country: '' ,
    city: "",
    mobileNumber: '',
    designation: 0,
    basicPay: 0,
    needTransportation: true ,
    notes: "",

    username: '',
    password: ''
  };

  constructor(private empService: EmployeeService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    

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
          this.router.navigate(['/emplist']);
        },
        error: (err: any) => {
          console.error(err);
          alert('Failed to register employee');
        }
      });
    }
  }
}
