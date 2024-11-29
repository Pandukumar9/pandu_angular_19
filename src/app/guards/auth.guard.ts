import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject the AuthService
  const router = inject(Router); // Inject the Router

  if (authService.isLoggedIn()) {
    // User is authenticated, allow navigation
    return true;
  } else {
    // User is not authenticated, redirect to login page
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url } // Optionally pass the original URL
    });
    return false;
  }
};
