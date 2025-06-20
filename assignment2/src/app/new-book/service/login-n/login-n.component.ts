import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-n',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login-n.component.html',
  styleUrl: './login-n.component.css'
})
export class LoginNComponent {
   loginObj: Login;

  constructor(private http: HttpClient, public router: Router){
    this.loginObj =new Login();
  }

  onLogin(){
    debugger;
    console.log("login clicked");
    this.http.post("https://trainingapi.zerone-consulting.net/api.publish/CheckLogin",this.loginObj).subscribe((res:any)=>{
      
      if(res.result){
        alert('login success');
        console.log("Navigating to home.....");
        this.router.navigate(['/home']).then(()=>
        {
          console.log('navigation successful');
        }).catch(err => {
          console.error('navigation failed',err);
        });
      } 
      else{
      alert(res.message);
    }
   error: (err:any) =>{
        console.error('API ERROR');
      }
    })
  }

}

export class Login{
  
    username: String;
    password: String;
  
  
  constructor(){
      this.username ='';
      this.password ='';
  }
}


