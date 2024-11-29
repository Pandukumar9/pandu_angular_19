import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path: 'login' , component:LoginComponent},
  {path: 'landing' , component: LandingComponent,data: { 'Module' : 'Landing', 'reuseRoute':true},canActivate:[AuthGuard]}
];
