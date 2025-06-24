import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  imports: [CommonModule,FormsModule, HttpClientModule,RouterModule]
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  deleteId!: number;
  deleteMessage = '';

  constructor(private empservice: EmployeeService,
    private router: Router
    
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    console.log('emplistcomponent loaded');
  }

  loadEmployees(): void {
    this.empservice.getEmployees().subscribe({
      
      next: (data: any) => {
        console.log('loaded employees',Response)
        this.employees = data;
      },
      error: (err: any) => {
        console.error('Failed to load employees', err);
      }
    });
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.empservice.deleteEmployee(id).subscribe({
        next: () => {
          alert('Employee deleted successfully!');
          this.loadEmployees();
        },
        error: (err: any) => {
          console.error('Delete failed', err);
          alert('Failed to delete employee.');
        }
      });
    }
  }

  deleteById(): void {
    
    if (!this.deleteId) {
      this.deleteMessage = 'Please enter a valid Employee ID.';
      return;
    }
    
    const id = Number(this.deleteId);


    if (confirm(`Are you sure you want to delete Employee ID ${this.deleteId}?`)) {
      this.empservice.deleteEmployee(this.deleteId).subscribe({
        next: () => {
          this.deleteMessage = `Employee with ID ${this.deleteId} deleted.`;
          this.deleteId = 0;
          this.loadEmployees();
        },
        error: (err) => {
          console.error('Delete by ID failed', err);
          this.deleteMessage = `Failed to delete employee with ID ${this.deleteId}.`;
        }
      });
    }
  }

  editEmployee(emp: any): void {
    console.log('Edit employee clicked:', emp);
    this.router.navigate(['/employee-form', emp.employeeID]);
  }
  
}