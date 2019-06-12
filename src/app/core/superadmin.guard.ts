import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  isSuperdmin() {
    if (this.authService.curUser === 'superAdmin') {
      return true;
    } else { return false; }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // return this.authService.user.pipe (
      //   take(1),
      //   map(data => data && data.roles.superAdmin),
      //   tap(isSuperAdmin => {
      //     if (!isSuperAdmin) {
      //       window.alert('Super Admins Only');
      //       console.log('Super Admins Only');
      //       this.router.navigate(['']);
      //     }
      //   })
      // );
      if (!this.authService.isLoggedIn || !this.isSuperdmin()) {
        window.alert('Sign In as a Lecturer to access this URL!');
        this.authService.SignOut();

     }
     return true;
  }
}
