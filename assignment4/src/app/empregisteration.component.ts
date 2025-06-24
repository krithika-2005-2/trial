import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';

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

  constructor(private empService: EmployeeService) {}

  onSubmit(form: NgForm) {
    

    if (form.valid) {
      console.log('Sending employee data:', this.employee);
      this.empService.addEmployee(this.employee).subscribe({
        next: (res: any) => {
          alert('Employee registered successfully');
          form.resetForm(); 
        },
        error: (err: any) => {
          console.error(err);
          alert('Failed to register employee');
        }
      });
    }
  }
}
