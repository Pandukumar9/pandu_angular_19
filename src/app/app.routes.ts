import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'login' , component:LoginComponent},
  {path: 'index' , component:IndexComponent},
  {path: 'index/landing' , component: LandingComponent,data: { 'Module' : 'Landing', 'reuseRoute':true},
    children: [
      // {path: 'marketplace', component: }
      // {path:'', component: }
    ]
}
  // {path: 'landing' , component: LandingComponent,data: { 'Module' : 'Landing', 'reuseRoute':true},canActivate:[AuthGuard]}

];
