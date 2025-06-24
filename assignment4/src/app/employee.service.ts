import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://internapi1.zerone-consulting.net/api/Employee';

  constructor(private http: HttpClient) {}
  

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken') || '';  // ✅ Match interceptor key
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.replace(/^"|"$/g, '').trim()}`
    });
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  //addEmployee(employee: any): Observable<any> {
    //return this.http.post(this.apiUrl, employee, { headers: this.getAuthHeaders() });
  //}
  addEmployee(employee: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('Sending employee:', employee);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post('https://internapi1.zerone-consulting.net/api/Employee', employee, { headers });
  }
  

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee, { headers: this.getAuthHeaders() });
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
