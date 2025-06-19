import { Routes } from '@angular/router';
import { HomeComponent } from './new-pag/home/home.component'; 
import { AboutComponent } from './new-pag/about/about.component'; 
import { ContactComponent } from './new-pag/contact/contact.component'; 

    export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full'}, 
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component: ContactComponent
      }
      
    ];