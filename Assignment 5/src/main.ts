import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter , } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 

import { CommonModule } from '@angular/common';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, 
   appConfig
);






