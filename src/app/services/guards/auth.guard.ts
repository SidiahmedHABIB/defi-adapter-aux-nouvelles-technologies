import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Constants } from '../../../constants';
import { environment } from '../../../environments/environment';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem(environment.isAuthenticated)
  ) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
