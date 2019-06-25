import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  curUser;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
    ) {
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
    }

    SignIn(email, password) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
// tslint:disable-next-line: triple-equals
            if (email == 'aucsc321@gmail.com') {
              localStorage.setItem('user', JSON.stringify(result.user));
              this.curUser = 'admin';
              this.router.navigate(['/dashboard']);
// tslint:disable-next-line: triple-equals
            } else if (email == 'saucsc321@gmail.com') {
              localStorage.setItem('user', JSON.stringify(result.user));
              this.curUser = 'superAdmin';
              this.router.navigate(['/superadmin']);
            } else {
              localStorage.setItem('user', JSON.stringify(result.user));
              this.curUser = 'lecturer';
              this.router.navigate(['/lecturer']);
            }
          });
        }).catch((error) => {
          window.alert('Ooops! something went wrong');
        })
    }

    getUser() {
      return this.user;
    }
    GetUser() {
      return this.user.pipe(first()).toPromise();
    }

    SignUp(email, password) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert('Please Enter Valid Details.')
        })
    }

    ForgotPassword(passwordResetEmail) {
      return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ;
    }

    SetUserData(user) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
        uid: user.uid,
        email: user.email,
        roles: {
          lecturer: true
        }
      }
      return userRef.set(data, {
        merge: true
      })
    }

    SignOut() {
      return this.afAuth.auth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      })
    }

}
