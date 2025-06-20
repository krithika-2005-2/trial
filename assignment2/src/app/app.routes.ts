import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeNComponent } from './new-book/home-n/home-n.component';
import { AboutNComponent } from './new-book/about-n/about-n.component'; 
import { ContactNComponent } from './new-book/contact-n/contact-n.component';
import { LoginNComponent } from './new-book/service/login-n/login-n.component';

    export const routes: Routes = [
      { path: '', redirectTo: 'Login', pathMatch: 'full'}, 
      {
        path: '',
       component: LoginNComponent
      },
      {
        path: 'login',
       component: LoginNComponent
      },

      {
        path:'home',
        component:HomeNComponent
      },
      {
        path:'about',
        component:AboutNComponent
      },
      {
        path:'contact',
        component: ContactNComponent
      }
      
    ];