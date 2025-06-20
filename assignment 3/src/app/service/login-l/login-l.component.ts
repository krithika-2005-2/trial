import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-n',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login-l.component.html',
  styleUrl: './login-l.component.css'
})
export class LoginLComponent {
   loginObj: Login;

  constructor(private http: HttpClient, private router: Router){
    this.loginObj =new Login();
  }

  onLogin(){
    debugger;
    console.log("login clicked");
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post("https://trainingapi.zerone-consulting.net/api.publish/CheckLogin",this.loginObj
      ,{headers, responseType: 'text'}).subscribe({next:(token:string)=>{
        console.log('API response');
        alert('login success');
        localStorage.setItem('token','bearer'+ token);
        console.log("Navigating to home.....");
        this.router.navigate(['/home']).catch(err => {console.error('navigation error')})
      }
  });
      error: (err:any) =>{
        console.error('login failed');
        alert('login failed');
      }}
    }
export class Login{
  
    username: String ='';
    password: String ='';
  
  
  constructor(){
      this.username ='';
      this.password ='';
  }
}




