import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 
import { authGuard } from './guards/auth.guard'; 




export const routes: Routes = [
    {path: '',redirectTo: 'login',pathMatch: 'full'},
    {
        path: '',
        component:LoginComponent
    },
     {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard] 
    },
    {
        path: 'employee-list',
        component: EmployeeListComponent,
        canActivate: [authGuard] 
        //loadComponent: () => import('./emplist.component').then(m => m.EmplistComponent)
    },

   {
    path: 'employee-form',
    loadComponent: () => import('./employee-form/employee-form.component').then(m => m.EmployeeFormComponent)
 },
 
    {
    path: 'employee-form/:id',
    loadComponent: () => import('./employee-form/employee-form.component').then(m => m.EmployeeFormComponent)
  }
];
