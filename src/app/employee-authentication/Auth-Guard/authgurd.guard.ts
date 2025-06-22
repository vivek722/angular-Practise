import { CanActivateFn } from '@angular/router';

export const authgurdGuard: CanActivateFn = (route, state) => {
  return true;
};
