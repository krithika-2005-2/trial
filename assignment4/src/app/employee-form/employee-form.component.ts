import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: any = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    personalEmail: '',
    mobileNumber: '',
    gender: 1,
    designation: 0
  };

  isEdit = false;
  employeeId!: number;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.employeeId = +id;
      this.empService.getEmployeeById(this.employeeId).subscribe({
        next: (data:any) => {
          this.employee = data;
        },
        error: (err:any) => {
          console.error('Failed to load employee data', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.empService.updateEmployee(this.employeeId, this.employee).subscribe({
        next: () => {
          alert('Employee updated successfully!');
          this.router.navigate(['/emplist']);
        },
        error: (err:any) => {
          console.error('Update failed', err);
          alert('Update failed');
        }
      });
    } else {
      this.empService.addEmployee(this.employee).subscribe({
        next: () => {
          alert('Employee added successfully!');
          this.router.navigate(['/employee-list']);
        },
        error: (err:any) => {
          console.error('Add failed', err);
          alert('Failed to add employee');
        }
      });
    }
  }
}
