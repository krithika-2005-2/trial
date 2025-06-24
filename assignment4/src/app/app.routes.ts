import { Routes } from '@angular/router';
import { EmpregisterationComponent } from './empregisteration.component'; 
import { LoginComponent } from './login/login.component';
import { EmplistComponent } from './emplist.component';
import { authGuard } from './auth.guard';




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
        component: EmpregisterationComponent,
        canActivate: [authGuard] 
    },
    {
        path: 'emplist',
        component: EmplistComponent,
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
