import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  async  login(email:  string, password:  string) {
// tslint:disable-next-line: triple-equals
    if (email == 'aucsc321@gmail.com') {
    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['/dashboard']);
    } catch (e) {
        alert('Error!'  +  e.message);
    }
// tslint:disable-next-line: triple-equals
  } else if (email == 'saucsc321@gmail.com') {
      try {
          await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
          this.router.navigate(['/superadmin']);
      } catch (e) {
          alert('Error!'  +  e.message);
      }
  } else {
    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['/lecturer']);
  } catch (e) {
      alert('Error!'  +  e.message);
  }
  }
  }
  async logout() {
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['']);
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
}
