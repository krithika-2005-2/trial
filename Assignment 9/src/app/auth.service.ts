import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    console.log('Is Logged In:', !!token);
    return !!token;
  }

  logout() {
    localStorage.removeItem('authToken');
  }
}
