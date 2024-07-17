import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject Router service

  const email = sessionStorage.getItem('email');

  if (email) {
    return true; // Allow access if email is set
  } else {
    // Redirect to login if not authenticated
    router.navigate(['/login']);
    return false; // Prevent access
  }
};
