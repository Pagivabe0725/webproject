import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const local = JSON.parse(localStorage.getItem('user') as string)
  console.log(local)
  if (local) {
    return true;
  }
  else { return false; }
};
