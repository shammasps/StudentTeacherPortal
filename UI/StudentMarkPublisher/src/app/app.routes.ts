import { provideRouter, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MarkUplodePageComponent } from './mark-uplode-page/mark-uplode-page.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"Register",component:RegistrationComponent},
    {path:'Home', component: HomeComponent},
    {path:'Markuplode', component:MarkUplodePageComponent},
    {path:'Result',component:ResultComponent},
];
