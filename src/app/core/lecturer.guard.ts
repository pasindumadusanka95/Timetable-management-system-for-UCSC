import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LecturerGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  isLecturer() {
    if (localStorage.getItem('curUser') === 'lecturer') {
      return true;
    } else { return false; }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isLoggedIn || !this.isLecturer()) {
        window.alert('Sign In as a Lecturer to access this URL!');
        this.authService.SignOut();

     }
     return true;
  }
}
