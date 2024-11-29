import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false; // This would typically be tied to a login system

  isLoggedIn(): boolean {
    // Check user authentication status (e.g., token presence, API call)
    return this.loggedIn;
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
