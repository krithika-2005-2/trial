import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  showPassword: boolean = false; 

  togglePassword() {
    this.showPassword = !this.showPassword;
  }


  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {
    const loginData = {
      username: this.username,
      password: this.password
      
    };

    this.http.post<any>('https://internapi1.zerone-consulting.net/CheckLogin', loginData)
      .subscribe({
        next: (res) => {
          console.log('Login response:', res);

          if (res&&res.loggedInUserToken) {
            localStorage.setItem('authToken', res.loggedInUserToken.token);
            console.log('Token saved to localStorage:', res.loggedInUserToken.token);
            alert('Login successful!');
            setTimeout(() => {
              this.router.navigate(['/emplist']);
            }, 0);
            this.router.navigate(['/emplist']);
          } else {
            alert('No token received');
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('login failed')
        }
      });
  }
}