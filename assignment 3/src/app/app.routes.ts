import { Routes } from '@angular/router';
import { HomeLComponent } from './new-booklet/home-l/home-l.component'; 
import { AboutLComponent } from './new-booklet/about-l/about-l.component'; 
import { ContactLComponent } from './new-booklet/contact-l/contact-l.component'; 
import { LoginLComponent } from './service/login-l/login-l.component'; 
    export const routes: Routes = [
      { path: '', redirectTo: 'Login', pathMatch: 'full'}, 
      {
        path: '',
        component: LoginLComponent
      },
      {
        path:'login',
        component:LoginLComponent
      },
      {
        path:'home',
        component:HomeLComponent
      },
      {
        path:'about',
        component:AboutLComponent
      },
      {
        path:'contact',
        component: ContactLComponent
      }
      
    ];