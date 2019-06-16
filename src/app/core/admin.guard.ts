import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
isAdmin() {
  if (this.authService.curUser === 'admin') {
    return true;
  } else { return false; }
}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isLoggedIn || !this.isAdmin()) {
        window.alert('Sign In as an admin to access this URL!');
        this.authService.SignOut();
     }
     return true;
}
}
